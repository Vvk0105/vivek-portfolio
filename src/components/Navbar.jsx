import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code, FileText, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection to adjust styling of the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: User },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "Resume", path: "/resume", icon: FileText },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0b0f19]/80 backdrop-blur-md border-b border-gray-800/60 shadow-lg"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Name Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-teal-400 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-sm text-black font-extrabold shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
            V
          </span>
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-indigo-400 transition-all duration-300">
            Vivek Babu
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-gray-950/40 p-1.5 rounded-full border border-gray-800/40 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium tracking-wide flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-teal-500/20 to-indigo-500/20 border border-teal-500/30 shadow-inner"
                    : "text-gray-400 hover:text-white border border-transparent hover:bg-white/5"
                }`}
              >
                <Icon size={15} className={isActive ? "text-teal-400" : "text-gray-500"} />
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-teal-400 rounded-full blur-[1px]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Call to Action */}
        <div className="hidden md:block">
          <Link
            to="/resume"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-400 border border-teal-500/30 bg-teal-950/20 hover:bg-teal-400 hover:text-black hover:border-teal-400 transition-all duration-300 shadow-md shadow-teal-500/5"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/40 border border-gray-800/30 transition-all focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] glass-panel border-b border-gray-800/80 shadow-2xl transition-all duration-300 ease-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 p-3.5 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "text-white bg-gradient-to-r from-teal-500/20 to-indigo-500/20 border border-teal-500/30 shadow-md"
                    : "text-gray-400 hover:text-white border border-transparent hover:bg-white/5"
                }`}
              >
                <Icon size={18} className={isActive ? "text-teal-400" : "text-gray-500"} />
                {link.name}
              </Link>
            );
          })}
          <div className="h-[1px] bg-gray-800/60 my-2" />
          <Link
            to="/resume"
            onClick={() => setIsOpen(false)}
            className="w-full text-center p-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 shadow-lg shadow-teal-500/20 transition-all"
          >
            Get Resume / CV
          </Link>
        </div>
      </div>
    </nav>
  );
}
