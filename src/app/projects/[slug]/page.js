import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/app/data/projects";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-10 pt-4">
      <div className="mx-auto w-full max-w-5xl px-6">
        {/* BACK */}
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* HEADER */}
        <div className="mb-12">
          <p className="mb-3 font-medium text-neutral-500 dark:text-neutral-400">
            Project
          </p>

          <h1 className="mb-5 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
            {project.title}
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-neutral-500 dark:text-neutral-400">
            {project.description}
          </p>
        </div>

        {/* IMAGE */}
        <div className="mb-16 space-y-6">
          {project.image.map((image, index) => (
            <div
              key={image}
              className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {project.liveUrl && (
          <div className="mb-16">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Visit Live Website
              <ExternalLink size={16} />
            </Link>
          </div>
        )}

        {/* CONTENT */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          {/* LEFT */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-white">
              Project Overview
            </h2>

            <p className="leading-8 text-neutral-500 dark:text-neutral-400">
              {project.overview}
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-neutral-900 dark:text-white">
              My Role
            </h2>

            <ul className="leading-8 text-neutral-500 dark:text-neutral-400">
              {project.role.map((role) => (
                <li key={role}> - {role}</li>
              ))}
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-neutral-900 dark:text-white">
              Features
            </h2>

            <ul className="space-y-3 text-neutral-500 dark:text-neutral-400">
              {project.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
