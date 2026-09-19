import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  slug,
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:backdrop-blur-md dark:shadow-black/20">
      {/* IMAGE */}
      <div className="relative aspect-video overflow-hidden border-b border-neutral-200 bg-neutral-100 dark:border-white/10 dark:bg-neutral-900/40">
        <Image src={image[0]} alt={title} fill className="object-contain" />
      </div>

      {/* CONTENT */}
      <div className="flex min-h-[280px] flex-col p-6">
        {/* TITLE */}
        <h3 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mb-5 text-base leading-7 text-neutral-500 line-clamp-2 dark:text-neutral-400">
          {description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-xl bg-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* LINK */}
        <div className="mt-auto pt-6">
          <Link
            href={`/projects/${slug}`}
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-all duration-300 hover:gap-3 dark:text-white"
          >
            View Project
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
