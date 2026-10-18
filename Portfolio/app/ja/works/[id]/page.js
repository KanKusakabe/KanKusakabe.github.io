// app/ja/works/[id]/page.js
import projects from "@/public/ja/works.json";
import projectsEn from "@/public/en/works.json";
import commons from "@/public/ja/common.json";
import ProjectPage from "@/app/components/ProjectPage";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function Page({ params }) {
  return (
    <ProjectPage params={params} projects={projects} commons={commons} otherProjects={projectsEn} otherBase="" />
  );
}
