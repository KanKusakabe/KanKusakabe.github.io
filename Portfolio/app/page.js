// app/page.js
import common from "@/public/en/common.json";
import projects from "@/public/en/works.json";
import samplePublications from "@/public/en/publications.json";
import HomePage from "@/app/components/HomePage";

export default function Home() {
  return (
    <HomePage
      common={common}
      projects={projects}
      samplePublications={samplePublications}
      lang="/"
    />
  );
}
