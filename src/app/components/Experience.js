const experiences = [
  {
    year: "2026",
    title: "Frontend Developer",
    company: "Personal Project",
    description:
      "Membangun website menggunakan React, Next.js, dan Tailwind CSS dengan fokus pada responsive design dan user experience.",
  },
  {
    year: "2025",
    title: "Web Developer Intern",
    company: "BPIFK",
    description:
      "Mengembangkan dan melakukan pemeliharaan website menggunakan Laravel, PHP, dan MySQL.",
  },
  {
    year: "2025",
    title: "Web Development",
    company: "Personal Project",
    description:
      "Mempelajari dan membangun berbagai website menggunakan HTML, CSS, JavaScript, PHP, dan Laravel.",
  },
];

export default function Experience() {
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

                  <p className="text-neutral-500 leading-7 max-w-xl dark:text-neutral-400">
                    {experience.description}
                  </p>

                  <button className="mt-5 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-500 transition dark:text-white dark:hover:text-neutral-400">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
