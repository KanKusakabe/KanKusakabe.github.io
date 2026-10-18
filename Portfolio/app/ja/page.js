// app/ja/page.js
import common from "@/public/ja/common.json";
import projects from "@/public/ja/works.json";
import samplePublications from "@/public/ja/publications.json";
import HomePage from "@/app/components/HomePage";

export default function Home() {
  return (
    <HomePage
      common={common}
      projects={projects}
      samplePublications={samplePublications}
      lang="ja/"
    />
  );
}
