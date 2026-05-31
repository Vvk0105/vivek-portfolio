import React from "react";
import { Mail, Heart, ArrowUp } from "lucide-react";

// Inline SVGs for Brand Icons (removed in Lucide v4)
const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Vvk0105",
      icon: GithubIcon,
      color: "hover:text-teal-400 hover:border-teal-500/30",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vivek-babu-151442248/",
      icon: LinkedinIcon,
      color: "hover:text-indigo-400 hover:border-indigo-500/30",
    },
    {
      name: "Email",
      href: "mailto:vivekbabu0105@gmail.com",
      icon: Mail,
      color: "hover:text-cyan-400 hover:border-cyan-500/30",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070a13] border-t border-gray-900 pt-16 pb-12 mt-auto">
      {/* Visual Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="group p-3 rounded-full bg-gray-950 border border-gray-800 hover:border-teal-500/50 text-gray-500 hover:text-teal-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/5 mb-8 -mt-20 hover:-translate-y-1"
          aria-label="Back to Top"
        >
          <ArrowUp size={18} className="transition-transform duration-300 group-hover:scale-110" />
        </button>

        {/* Brand/Subtitle */}
        <div className="flex flex-col items-center gap-2 mb-8 text-center">
          <div className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
            <span className="w-6 h-6 rounded-md bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-xs text-black font-extrabold shadow-sm">
              V
            </span>
            Vivek Babu
          </div>
          <p className="text-sm text-gray-500 max-w-sm">
            Crafting elegant solutions to complex problems. Developing scalable python backends and beautiful interfaces.
          </p>
        </div>

        {/* Social Icons Grid */}
        <div className="flex gap-4 mb-8">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-gray-900/50 border border-gray-800/80 text-gray-400 transition-all duration-300 ${item.color} hover:bg-gray-950 hover:-translate-y-1 flex items-center justify-center`}
                aria-label={item.name}
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            );
          })}
        </div>

        {/* Separator */}
        <div className="w-full max-w-md h-[1px] bg-gray-900 mb-8" />

        {/* Copyright Detail */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-gray-600 gap-4 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Vivek Babu. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with
            <Heart size={10} className="text-rose-500 fill-rose-500 animate-pulse" />
            using React, Tailwind CSS, & Vite
          </div>
        </div>
      </div>
    </footer>
  );
}
