import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section id="projects" className=" scroll-mt-20 py-24">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12" data-aos="fade-right">
          <p className="text-neutral-500 font-medium mb-3 dark:text-neutral-400">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4 dark:text-white">
            Some Things I've Built
          </h2>

          <p className="text-neutral-500 leading-7 dark:text-neutral-400">
            Beberapa project yang pernah saya kerjakan dan kembangkan
            menggunakan berbagai teknologi web.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
