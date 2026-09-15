"use client";

import { useEffect, useRef } from "react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Laravel", icon: SiLaravel },
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default function Skills() {
  const marqueeRef = useRef(null);
  const positionRef = useRef(0);
  const speedRef = useRef(0.8);
  const targetSpeedRef = useRef(0.8);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    let animationFrame;

    const animate = () => {
      // Perubahan kecepatan secara perlahan
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.08;

      positionRef.current -= speedRef.current;

      // Karena skills diduplikasi 2x
      const halfWidth = marquee.scrollWidth / 2;

      if (Math.abs(positionRef.current) >= halfWidth) {
        positionRef.current = 0;
      }

      marquee.style.transform = `translateX(${positionRef.current}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="skills" className=" scroll-mt-20 py-24">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="mb-10" data-aos="fade-right">
          <p className="mb-3 font-medium text-neutral-500 dark:text-neutral-400">
            Technology
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
            Technologies I Use
          </h2>
        </div>

        <div
          className="overflow-hidden rounded-2xl bg-neutral-900 py-8 dark:bg-neutral-800"
          data-aos="fade-up"
          onMouseEnter={() => {
            targetSpeedRef.current = 0.08;
          }}
          onMouseLeave={() => {
            targetSpeedRef.current = 0.8;
          }}
        >
          <div ref={marqueeRef} className="flex w-max will-change-transform">
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex items-center gap-3 px-8 text-white"
                >
                  <Icon size={32} />

                  <span className="whitespace-nowrap text-lg font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
