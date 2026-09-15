"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ name }) {
  // state
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menus = [
    { name: "Home", id: "home", href: "/#home" },
    { name: "About", id: "about", href: "/#about" },
    { name: "Technology", id: "skills", href: "/#skills" },
    { name: "Projects", id: "projects", href: "/#projects" },
    { name: "Experience", id: "experience", href: "/#experience" },
    { name: "Contact", id: "contact", href: "/#contact" },
  ];

  //   useEffect(() => {
  //     const sections = document.querySelectorAll("section[id]");
  //     const updateActiveSection = () => {
  //       const scrollPosition = window.scrollY + 96;
  //       let currentSection = "home";

  //       sections.forEach((section) => {
  //         if (section.offsetTop <= scrollPosition) {
  //           currentSection = section.id;
  //         }
  //       });

  //       setActiveSection(currentSection);
  //     };

  //     updateActiveSection();
  //     window.addEventListener("scroll", updateActiveSection, { passive: true });

  //     return () => window.removeEventListener("scroll", updateActiveSection);
  //   }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const updateActiveSection = () => {
      let currentSection = "home";

      // Titik acuan: 30% dari tinggi layar
      const triggerPoint = window.innerHeight * 0.3;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerPoint) {
          currentSection = section.id;
        }
      });

      // Jika sudah benar-benar sampai bawah halaman,
      // Contact harus aktif
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full max-w-full overflow-x-clip bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
      <div className="box-border w-full max-w-6xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-neutral-900 dark:text-white"
          >
            {name}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menus.map((menu) => {
              const isActive = activeSection === menu.id;

              return (
                <Link
                  key={menu.id}
                  href={menu.href}
                  className={`group relative py-2 transition ${
                    isActive
                      ? "text-neutral-900 dark:text-white"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  {menu.name}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-neutral-900 dark:bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle navigation"
          >
            <span
              className={`absolute w-6 h-0.5 bg-neutral-900 dark:bg-white transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />

            <span
              className={`absolute w-6 h-0.5 bg-neutral-900 dark:bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute w-6 h-0.5 bg-neutral-900 dark:bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-neutral-200 dark:border-neutral-700 py-4">
            <div className="flex flex-col gap-2">
              {menus.map((menu) => {
                const isActive = activeSection === menu.id;

                return (
                  <Link
                    key={menu.id}
                    href={menu.href}
                    onClick={() => setIsOpen(false)}
                    className={`group relative px-2 py-3 transition ${
                      isActive
                        ? "font-medium text-neutral-900 dark:text-white"
                        : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    }`}
                  >
                    {menu.name}

                    <span
                      className={`absolute bottom-1 left-2 h-0.5 bg-neutral-900 dark:bg-white transition-all duration-300 ${
                        isActive ? "w-12" : "w-0 group-hover:w-12"
                      }`}
                    />
                  </Link>
                );
              })}
              <div className="mt-4">
                <ThemeToggle onToggle={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
