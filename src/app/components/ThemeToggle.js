// "use client";

// import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const html = document.documentElement;

//     if (html.classList.contains("dark")) {
//       html.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDark(false);
//     } else {
//       html.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDark(true);
//     }

//     // Tutup mobile menu
//     if (onToggle) {
//       onToggle();
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       aria-label="Toggle dark mode"
//       className="relative flex h-8 w-16 items-center rounded-full bg-neutral-200 p-1 transition-colors dark:bg-neutral-700"
//     >
//       <span
//         className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ${
//           isDark ? "translate-x-7" : "translate-x-0"
//         }`}
//       >
//         {isDark ? (
//           <Sun size={13} className="text-neutral-700" />
//         ) : (
//           <Moon size={13} className="text-neutral-700" />
//         )}
//       </span>
//     </button>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ onToggle }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }

    // Tutup mobile menu
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative flex h-8 w-16 items-center rounded-full bg-neutral-200 p-1 transition-colors dark:bg-neutral-700"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Sun size={13} className="text-neutral-700" />
        ) : (
          <Moon size={13} className="text-neutral-700" />
        )}
      </span>
    </button>
  );
}
