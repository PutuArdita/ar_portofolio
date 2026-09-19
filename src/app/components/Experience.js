"use client";

import { useState } from "react";

const experiences = [
  {
    year: "2025-2026",
    title: "Magang Pranata Komputer (Maganghub Kemnaker)",
    company: "Balai Pemberdayaan Industri Fesyen dan Kriya (BPIFK)",
    description: [
      "Mengembangkan dan melakukan pemeliharaan website menggunakan Laravel, PHP, dan MySQL.",
      "Melakukan deploy fitur baru ke repository GIT dari vendor penyedia website.",
      "Melakukan redesign tampilan website BPIFK menggunakan Figma.",
      "Menganalisis fitur-fitur website satker lain di bawah Kementerian Perindustrian.",
      "Melakukan maintenance peralatan kantor seperti printer dan komputer",
      "Mendukung oprasional kantor",
    ],
  },
  {
    year: "2024",
    title: "Magang DISKOMINFO",
    company: "Dinas Komunikasi dan Informatika Kabupaten Badung",
    description: [
      "Mengelola Konten website pemkab Badung",
      "Melakukan Peliputan kegiatan yang dilakukan dinas lain di Kabupaten Badung",
      "Melakukan edit foto hasil peliputan menggunakan software Photoshop",
      "Membuat rilis berita kegiatan.",
      "Backup laporan upload konten menggunakan Google Spreadsheet",
    ],
  },
];

export default function Experience() {
  const [expandedExperience, setExpandedExperience] = useState(null);

  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16" data-aos="fade-right">
          <p className="text-neutral-500 font-medium mb-3 dark:text-neutral-400">
            Pengalaman
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4 dark:text-white">
            Pengalaman Saya
          </h2>

          <p className="text-neutral-500 leading-7 dark:text-neutral-400">
            Beberapa pengalaman saya selama menempuh pendidikan maupun setelah
            lulus.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-700 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className="relative grid md:grid-cols-2 md:gap-16"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-1 w-6 h-6 rounded-full bg-neutral-900 border-4 border-neutral-50 dark:bg-white dark:border-neutral-900 md:-translate-x-1/2" />

                {/* Content */}
                <div
                  className={`experience-item pl-12 md:pl-0 ${
                    index % 2 === 0
                      ? "md:col-start-2"
                      : "md:col-start-1 md:text-right"
                  }`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <p className="text-sm text-neutral-500 mb-2 dark:text-neutral-400">
                    {experience.year}
                  </p>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-1 dark:text-white">
                    {experience.title}
                  </h3>

                  <p className="text-sm font-medium text-neutral-600 mb-4 dark:text-neutral-300">
                    {experience.company}
                  </p>

                  <ul className="text-neutral-500 leading-7 max-w-xl list-disc list-inside space-y-2 dark:text-neutral-400">
                    {(expandedExperience === experience.title
                      ? experience.description
                      : experience.description.slice(0, 1)
                    ).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  {experience.description.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedExperience((current) =>
                          current === experience.title
                            ? null
                            : experience.title,
                        )
                      }
                      className="mt-5 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-500 transition dark:text-white dark:hover:text-neutral-400"
                    >
                      {expandedExperience === experience.title
                        ? "Less"
                        : "More"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
