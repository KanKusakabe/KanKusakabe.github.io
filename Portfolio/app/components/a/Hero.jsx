// app/components/a/Hero.jsx
// ヘッダー: 人物を抜いた背景 → 人物のシルエット → 名前 → 切り抜いた人物 の順に重ね、人物だけが名前の手前に立つ。
// 人物とシルエットは背景より少し大きくし、人物だけを横にずらしてシルエットを覗かせる
// （design-a.css の --cut-scale / --cut-dx）。
// 写真は public/hero-photos.json の候補から、アクセスごとにランダムで選ぶ。
"use client";
import { useEffect, useRef, useState } from "react";
import photos from "@/public/hero-photos.json";
import { ChevronDown } from "./icons";

// 改行（\n）を <br /> にする
export function Lines({ text }) {
  const parts = String(text).split("\n");
  return parts.map((line, i) => (
    <span key={i}>
      {line}
      {i < parts.length - 1 && <br />}
    </span>
  ));
}

// 写真の1層。WebP（1200 / 2000px）と、古いブラウザ向けの PNG（1200px）。どちらも透過あり。
// 背景は人物を抜いた写真、手前は人物だけ。
// 画像と public/hero-photos.json は scripts/make-hero.sh で作る（元写真と切り抜きは public/face）
function Layer({ basePath, id, kind, className }) {
  const base = `${basePath}/image/hero/${id}-${kind}`;
  return (
    <picture>
      <source type="image/webp" srcSet={`${base}-1200.webp 1200w, ${base}-2000.webp 2000w`} sizes="100vw" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={className} src={`${base}-1200.png`} alt="" decoding="async" />
    </picture>
  );
}

export default function Hero({ a, basePath, children }) {
  const mediaRef = useRef(null);
  // サーバーでは1枚目を描き、読み込み後にランダムで選び直す（選ぶまでは写真を隠す）
  const [index, setIndex] = useState(null);
  const photo = photos[index ?? 0];
  // シルエットのマスクに使う切り抜き画像（人物の <img> が実際に読み込んだもの）
  const [silSrc, setSilSrc] = useState(null);

  useEffect(() => {
    // ?photo=kan03 のように指定すると、その写真に固定（確認用）
    const forced = photos.findIndex((p) => p.id === new URLSearchParams(window.location.search).get("photo"));
    setIndex(forced >= 0 ? forced : Math.floor(Math.random() * photos.length));
  }, []);

  // object-fit: cover で写真が切り詰められる位置を計算し、
  // 狭い画面では顔を中央に寄せ、名前を（拡大した）人物の頭の位置に合わせる
  useEffect(() => {
    const el = mediaRef.current;
    const layout = () => {
      const wc = el.clientWidth, hc = el.clientHeight;
      if (!wc || !hc) return;
      const wd = Math.max(wc, hc * photo.aspect), hd = wd / photo.aspect;  // 表示される写真の大きさ
      let pos = 0.5;
      if (wd > wc + 1) pos = Math.min(1, Math.max(0, (wc / 2 - photo.fx * wd) / (wc - wd)));
      el.style.setProperty("--ox", `${(pos * 100).toFixed(1)}%`);
      // 人物とシルエットは顔の真下・写真の下端を中心に拡大する
      el.style.setProperty("--face-x", `${((wc - wd) * pos + photo.fx * wd).toFixed(1)}px`);
      const scale = parseFloat(getComputedStyle(el).getPropertyValue("--cut-scale")) || 1;
      const hairTop = hc - (hc - ((hc - hd) / 2 + photo.hair * hd)) * scale;
      // 名前は頭の上端に合わせるが、写真の上端からはみ出さないところまでしか上げない
      // （名前は translateY(-62%) で上にずらしているので、その分を足して比べる）
      const name = el.querySelector(".a-hero-name");
      const minTop = 14 + name.offsetHeight * 0.62;
      const top = Math.max(hairTop, minTop);
      el.style.setProperty("--name-top", `${top.toFixed(1)}px`);
      // シルエットは人物と同じ画像を使う（キャッシュが効く）。前の写真のものは使わない
      const src = cut.currentSrc;
      if (src.includes(`/${photo.id}-cut-`)) setSilSrc(src);
    };
    const cut = el.querySelector(".a-layer-cut");
    layout();
    window.addEventListener("resize", layout);
    cut.addEventListener("load", layout);
    return () => {
      window.removeEventListener("resize", layout);
      cut.removeEventListener("load", layout);
    };
  }, [photo]);

  const { hero, nav } = a;

  return (
    <header className="a-hero">
      {/* 写真の幅はサイトの中身の幅（--a-content）まで。狭い画面では画面幅いっぱい。
          data-side: 重ねるカード（children）を人物と反対側の下隅に置く */}
      <div className="a-hero-frame" data-side={photo.fx > 0.6 ? "left" : "right"}>
        <div
          ref={mediaRef}
          className={`a-hero-media${index === null ? " is-pending" : ""}`}
          style={{ "--hair": photo.hair }}
        >
          <Layer basePath={basePath} id={photo.id} kind="bg" className="a-layer a-layer-bg" />
          {silSrc && <div className="a-layer a-layer-sil" style={{ "--sil": `url("${silSrc}")` }} />}
          <div className="a-hero-shade" />
          <h1 className="a-hero-name">{hero.headline}</h1>
          <Layer basePath={basePath} id={photo.id} kind="cut" className="a-layer a-layer-cut" />
        </div>
        {children}
      </div>

      {/* 写真の枠（overflow: hidden）の外に置き、次のセクションにまたがって見えるようにする */}
      <a className="a-scroll" href="#profile" aria-label={nav.scroll}>
        <ChevronDown />
      </a>
    </header>
  );
}
