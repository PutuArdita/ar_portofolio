import Image from "next/image";
import { Mail } from "lucide-react";

import {
  SiGithub,
  SiInstagram,
  SiWhatsapp,
  SiFacebook,
} from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className=" scroll-mt-20 py-24">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[5fr_7fr] gap-12 md:gap-8 items-start">
          {/* Photo */}
          <div
            className="flex flex-col items-center md:items-start"
            data-aos="fade-up"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl md:h-72 md:w-72">
              <Image
                src="/profil.jpg"
                alt="Ardita"
                fill
                className="object-cover"
              />
            </div>
            <hr className="my-3 w-72 border-t border-neutral-500 dark:border-neutral-700" />

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/+6287762908293"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
                className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <SiWhatsapp size={24} />
              </a>
              <a
                href="mailto:putuardita15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <Mail size={24} />
              </a>

              <a
                href="https://github.com/PutuArdita"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <SiGithub size={24} />
              </a>

              <a
                href="https://instagram.com/putuardita_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <SiInstagram size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <SiFacebook size={24} />
              </a>

              <a
                href="https://linkedin.com/in/i-putu-ardita-37581441a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <p className="mb-3 font-medium text-neutral-500 dark:text-neutral-400">
              Tentang Saya
            </p>

            <h2 className="mb-6 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
              Lulusan Sistem Informasi & IT Enthusiast.
            </h2>

            <p className="mb-5 leading-8 text-neutral-500 dark:text-neutral-400">
              Saya adalah seorang yang tertarik pada pengembangan website,
              khususnya frontend development. Saya senang dalam mempelajari hal
              baru khususnya di bidang teknologi.
            </p>

            <p className="leading-8 text-neutral-500 dark:text-neutral-400">
              Saya merupakan lulusan Sistem Informasi ITB STIKOM Bali
              (2021-2025), dimana fokus utama yang dipelajari yaitu bagaimana
              proses bisnis dari sistem, manajemen IT, dan juga teknis
              pengembangan sistem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
