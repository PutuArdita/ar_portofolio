import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white dark:bg-neutral-950">
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="text-xl font-semibold">
              Ardita
            </Link>

            <p className="text-neutral-400 text-sm mt-2">
              Junior Web Developer
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <Link
              href="/#home"
              className="text-neutral-400 hover:text-white transition"
            >
              Home
            </Link>

            <Link
              href="/#about"
              className="text-neutral-400 hover:text-white transition"
            >
              About
            </Link>

            <Link
              href="/#skills"
              className="text-neutral-400 hover:text-white transition"
            >
              Technology
            </Link>

            <Link
              href="/#projects"
              className="text-neutral-400 hover:text-white transition"
            >
              Projects
            </Link>

            <Link
              href="/#experience"
              className="text-neutral-400 hover:text-white transition"
            >
              Experience
            </Link>

            <Link
              href="/#contact"
              className="text-neutral-400 hover:text-white transition"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Ardita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
