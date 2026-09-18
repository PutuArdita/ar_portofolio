"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // for icon arrow right
import { ReactTyped } from "react-typed"; // for typing effect

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center scroll-mt-20 pt-8 md:pt-0"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl" data-aos="fade-right">
            <p className="mb-3 text-base font-medium text-neutral-500 dark:text-neutral-400 md:text-lg">
              Halo, Saya
            </p>

            <h1 className="mb-3 text-5xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl">
              Ardita
            </h1>

            <h2 className="mb-6 text-xl font-medium leading-tight text-neutral-500 dark:text-neutral-400 sm:text-3xl">
              <span className="inline-block min-w-[18ch]">
                <ReactTyped
                  strings={[
                    "Junior Web Dev",
                    "Junior Frontend Dev",
                    "UI/UX Enthusiast",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={1500}
                  startDelay={500}
                  loop
                  showCursor
                  cursorChar="|"
                />
              </span>
            </h2>

            <p className="leading-relaxed mb-10 max-w-xl text-base text-neutral-500 dark:text-neutral-400 sm:text-lg sm:leading-8">
              Saya memiliki ketertarikan dalam pengembangan website, mempelajari
              teknologi serta terus meningkatkan kemampuan dalam pengembangan
              website yang responsif, fungsional, dan user-friendly.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-x-2 hover:bg-neutral-700 hover:shadow-lg dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 sm:px-7 sm:py-4 sm:text-base"
              >
                Let's Talk
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className="relative mx-auto h-96 w-72 md:h-[28rem] md:w-80"
            data-aos="fade-left"
          >
            {/* BACKGROUND SHAPE */}
            <div className="absolute inset-0 rounded-t-[10rem] rounded-b-[10rem] bg-neutral-900 dark:bg-neutral-800" />

            {/* PHOTO */}
            <div className="absolute inset-0 z-10">
              <Image
                src="/profil.jpg"
                alt="Ardita"
                fill
                priority
                className="object-cover object-top  rounded-t-[10rem] rounded-b-[10rem] [box-shadow:10px_10px_20px_rgba(0,0,0,0.15)]"
              />
            </div>

            {/* SKILL TAG - UI/UX */}
            <div className="absolute z-20 top-20 -right-12 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-lg dark:bg-neutral-800 dark:text-white">
              UI/UX Enthusiast
            </div>

            {/* SKILL TAG - JUNIOR WEB DEV */}
            <div className="absolute z-20 top-1/2 -left-16 -translate-y-1/2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-lg dark:bg-neutral-800 dark:text-white">
              Junior Web Dev
            </div>

            {/* SKILL TAG - EXCEL */}
            <div className="absolute z-20 bottom-20 -right-10 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-lg dark:bg-neutral-800 dark:text-white">
              Microsoft Office
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
