"use client";

import { useState } from "react";

import { Mail, Phone, MapPin, Send } from "lucide-react";

import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    setStatus("");

    const data = new FormData();

    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("subject", `New message from ${formData.name} - Portfolio`);
    data.append("replyto", formData.email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus(error.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-xl">
          {/* LEFT */}
          <div className="bg-neutral-900 text-white p-8 md:p-12 dark:bg-neutral-800">
            <p className="text-sm font-medium mb-3">CONTACT</p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Let's Connect
            </h2>

            <p className="text-neutral-400 leading-7 max-w-md mb-10">
              Saya selalu terbuka untuk berdiskusi mengenai project, ide
              kreatif, maupun peluang untuk bekerja sama.
            </p>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={22} className="mt-1 shrink-0" />

                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-neutral-400 text-sm mt-1">
                    your@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={22} className="mt-1 shrink-0" />

                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-neutral-400 text-sm mt-1">
                    +62 8XX XXXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={22} className="mt-1 shrink-0" />

                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-neutral-400 text-sm mt-1">
                    Bali, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-neutral-700">
              <a
                href="#"
                aria-label="GitHub"
                className="text-neutral-400 hover:text-white transition"
              >
                <SiGithub size={24} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-neutral-400 hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-neutral-400 hover:text-white transition"
              >
                <SiInstagram size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white text-neutral-900 p-8 md:p-12 dark:bg-neutral-800 dark:text-white">
            <h3 className="text-2xl font-bold mb-8">Send Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-neutral-900 transition dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-neutral-900 transition dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 outline-none focus:border-neutral-900 transition resize-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-700 transition dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <Send size={18} />
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
              {status && (
                <p
                  className={`text-sm ${
                    status.includes("success")
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
