// hero-web.swift — site-ready header images: wide (16:10 max) crop of a photo + its hand-made cutout.
// Called by scripts/make-hero.sh; see there for the full workflow.
// usage: hero-web <original photo> <cut.png> <output dir> <name> [<bg.png>]
//   bg.png   the photo with the person removed (transparent where the person was); same canvas size.
//            Without it, the background layer is the original photo (person included).
// Writes, for widths 1200 and 2000 (or the source width if smaller):
//   <name>-bg-<w>.png          background layer, with alpha
//   <name>-cut-<w>.png         person only, with alpha
// Face detection always runs on the original photo.
// and prints a JSON line with the face / hair positions (fractions of the crop, top-left origin).
// The PNGs are lossless intermediates that make-hero.sh converts to WebP with cwebp.
// (macOS's own AVIF encoder output decodes as transparent in Chromium, so it is not used.)
// Both layers share the same crop, so object-fit / object-position keep them aligned at any viewport.
// No metadata is copied from the source photo (no GPS / camera info).
import CoreImage
import Foundation
import ImageIO
import Vision

let a = CommandLine.arguments
guard a.count == 5 || a.count == 6 else { fatalError("usage: hero-web <original> <cut> <outdir> <name> [<bg>]") }
let outDir = URL(fileURLWithPath: a[3]), name = a[4]
let srgb = CGColorSpace(name: CGColorSpace.sRGB)!
let ctx = CIContext(options: [.workingColorSpace: srgb])

func load(_ path: String) -> CIImage {
  guard let raw = CIImage(contentsOf: URL(fileURLWithPath: path), options: [.applyOrientationProperty: true]) else { fatalError("cannot read \(path)") }
  return raw.transformed(by: CGAffineTransform(translationX: -raw.extent.minX, y: -raw.extent.minY))
}
let original = load(a[1]), cutLayer = load(a[2])
let bgLayer = a.count == 6 ? load(a[5]) : original
guard cutLayer.extent.size == original.extent.size else { fatalError("cutout size differs from original") }
guard bgLayer.extent.size == original.extent.size else { fatalError("background size differs from original") }
let W = original.extent.width, H = original.extent.height

let faceReq = VNDetectFaceRectanglesRequest()
try VNImageRequestHandler(ciImage: original, options: [:]).perform([faceReq])
guard let face = faceReq.results?.max(by: { $0.boundingBox.width * $0.boundingBox.height < $1.boundingBox.width * $1.boundingBox.height }) else {
  fatalError("no face found")
}
let fb = face.boundingBox

// full width, 16:10 tall at most; the face sits ~38% from the top
let cropH = min(H, (W / 1.6).rounded())
var topTL = (1 - fb.midY) * H - cropH * 0.38
topTL = max(0, min(H - cropH, topTL))
let crop = CGRect(x: 0, y: H - topTL - cropH, width: W, height: cropH).integral

// writes one image; no metadata is copied from the source (no GPS / camera info)
func write(_ img: CIImage, _ file: String, _ type: String, quality: Double?) throws {
  guard let cg = ctx.createCGImage(img, from: img.extent, format: .RGBA8, colorSpace: srgb) else { fatalError("render failed") }
  let url = outDir.appendingPathComponent(file)
  guard let dest = CGImageDestinationCreateWithURL(url as CFURL, type as CFString, 1, nil) else { fatalError("no encoder for \(type)") }
  var props: [CFString: Any] = [:]
  if let quality { props[kCGImageDestinationLossyCompressionQuality] = quality }
  CGImageDestinationAddImage(dest, cg, props as CFDictionary)
  guard CGImageDestinationFinalize(dest) else { fatalError("write failed: \(file)") }
}

for target in [1200.0, 2000.0] {
  let outW = min(target, crop.width)
  let s = outW / crop.width
  let outRect = CGRect(x: 0, y: 0, width: (crop.width * s).rounded(), height: (crop.height * s).rounded())
  func prepared(_ img: CIImage) -> CIImage {
    img.cropped(to: crop)
      .clampedToExtent()  // keep the resampler from pulling transparent pixels in at the edges
      .transformed(by: CGAffineTransform(translationX: -crop.minX, y: -crop.minY))
      .applyingFilter("CILanczosScaleTransform", parameters: [kCIInputScaleKey: s, kCIInputAspectRatioKey: 1.0])
      .cropped(to: outRect)
  }
  let w = Int(target)
  let bg = prepared(bgLayer), cut = prepared(cutLayer)
  try write(bg, "\(name)-bg-\(w).png", "public.png", quality: nil)
  try write(cut, "\(name)-cut-\(w).png", "public.png", quality: nil)
}

let toCrop = { (y: Double) in (crop.maxY - y) / crop.height }
let r3 = { (v: Double) in (v * 1000).rounded() / 1000 }
// hair top from the cutout's alpha (first opaque row from the top)
let probeW = 160
let probeScale = CGFloat(probeW) / crop.width
let probeH = Int((crop.height * probeScale).rounded())
let small = cutLayer.cropped(to: crop).transformed(by: CGAffineTransform(translationX: -crop.minX, y: -crop.minY))
  .applyingFilter("CILanczosScaleTransform", parameters: [kCIInputScaleKey: probeScale, kCIInputAspectRatioKey: 1.0])
var px = [UInt8](repeating: 0, count: probeW * probeH * 4)
ctx.render(small, toBitmap: &px, rowBytes: probeW * 4, bounds: CGRect(x: 0, y: 0, width: probeW, height: probeH), format: .RGBA8, colorSpace: nil)
var hairTop = 0.0
outer: for row in 0..<probeH {
  for col in 0..<probeW where px[(row * probeW + col) * 4 + 3] > 128 {
    hairTop = Double(row) / Double(probeH)
    break outer
  }
}
let info: [String: Any] = [
  "id": name,
  "aspect": r3(crop.width / crop.height),
  "fx": r3(fb.midX),
  "hair": r3(hairTop),
  "faceBottom": r3(toCrop(fb.minY * H)),
  "widths": [1200, 2000].map { Int(min(Double($0), crop.width)) },
]
let json = try JSONSerialization.data(withJSONObject: info, options: [.sortedKeys])
print(String(data: json, encoding: .utf8)!)
