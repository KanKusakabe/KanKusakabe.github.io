// app/components/a/RevealObserver.jsx
"use client";
import { useEffect } from "react";

// .a-reveal の要素を、画面に入ったらフェードインさせる。
// JS が動かない環境や「視差効果を減らす」設定では何も隠さない。
export default function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const els = document.querySelectorAll(".a-reveal");
    // すでに見えている要素は先に表示済みにしてからクラスを付け、ちらつきを防ぐ
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
    });
    const root = document.documentElement;
    root.classList.add("a-reveal-ready");

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      root.classList.remove("a-reveal-ready");
    };
  }, []);
  return null;
}
