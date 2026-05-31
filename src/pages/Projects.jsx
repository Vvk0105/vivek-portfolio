import React, { useState } from "react";
import Footer from "../components/Footer";
import {
  ExternalLink,
  Cpu,
  Activity,
  Layers,
  Sparkles,
  Award,
  Globe,
  Scissors,
  Home as HomeIcon,
  Music,
  CalendarDays,
  PenTool,
  Code
} from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "fullstack", name: "Full-Stack & AI Platforms" },
    { id: "client", name: "Client Websites (Live)" },
  ];

  const projects = [
    // Resume Projects (Full-Stack & AI Category)
    {
      title: "Claim Denial Analysis Platform",
      desc: "Developed an AI-assisted platform to classify and analyze denied healthcare claims, assisting analysts in identifying denial reasons, root causes, and corrective actions.",
      highlights: [
        "Integrated intelligent automated workflows that speed up claims reviews.",
        "Built detailed dashboard components to track and aggregate denial causes.",
        "Created optimized REST API endpoints to handle high-volume analytical queries."
      ],
      tech: ["React", "TypeScript", "Redux", "AI Integration", "Tailwind CSS"],
      category: "fullstack",
      icon: Cpu,
      gradient: "from-teal-500/20 to-indigo-500/20",
      iconColor: "text-teal-400",
    },
    {
      title: "Healthcare CRM & Payment Platform",
      desc: "Built a fully-featured CRM for medical operations, managing patient billing workflows, appointment scheduling, and secured automated Stripe transactions.",
      highlights: [
        "Developed billing pipelines, custom invoices, and recurring scheduling models.",
        "Integrated secure Stripe payment gateways for automated transaction processing.",
        "Built modular React pages integrated with dynamic, high-performance FastAPI backends."
      ],
      tech: ["React.js", "FastAPI", "Stripe", "PostgreSQL", "Redux", "Tailwind CSS"],
      category: "fullstack",
      icon: Activity,
      gradient: "from-rose-500/20 to-indigo-500/20",
      iconColor: "text-rose-400",
    },
    {
      title: "Hourly Stay Hotel Booking Platform",
      desc: "Developed a granular hotel reservation solution supporting hourly/daily custom booking intervals, reservation tracking pipelines, and integrated merchant processing.",
      highlights: [
        "Created flexible check-in/check-out logical loops supporting hourly reservations.",
        "Integrated Razorpay gateway solutions for secure online bookings.",
        "Built secure REST APIs with full JWT authentication, role management, and booking trackers."
      ],
      tech: ["Django", "React.js", "Razorpay", "MySQL", "Django REST Framework"],
      category: "fullstack",
      icon: CalendarDays,
      gradient: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-400",
    },
    {
      title: "AI Recruiter & Interview Bot",
      desc: "Created a modern talent recruitment system enabling resume uploads, matching semantic scoring against active jobs, and launching automated voice/text interview workflows.",
      highlights: [
        "Built resume parsing parsers matching applicant profiles to target jobs.",
        "Designed and integrated voice/text interactive interview simulator engines.",
        "Developed full applicant portals, dashboard reviews, and automated scoring meters."
      ],
      tech: ["Django", "React.js", "MySQL", "AI Integrations", "Tailwind CSS"],
      category: "fullstack",
      icon: Sparkles,
      gradient: "from-violet-500/20 to-fuchsia-500/20",
      iconColor: "text-violet-400",
    },
    {
      title: "Pen Craft Content Review Platform",
      desc: "Designed and engineered an article, script, and novel evaluation system with multi-level peer and professional editorial review structures.",
      highlights: [
        "Implemented detailed evaluation grading metrics and content workflow trackers.",
        "Created role-based panels for reviewers, contributors, and chief editors.",
        "Built full content submission interfaces with robust file uploading and status notifications."
      ],
      tech: ["Django", "Django REST Framework", "MySQL", "HTML5", "Tailwind CSS"],
      category: "fullstack",
      icon: PenTool,
      gradient: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-400",
    },

    // Client Projects (Client Websites Category)
    {
      title: "Lumiya",
      desc: "A gorgeous modern web platform designed for an elite Event Planning and Production agency, highlighting their high-profile portfolio, services, and digital gallery.",
      link: "https://lumiya.netlify.app/",
      tech: ["React.js", "Tailwind CSS", "Vite", "Framer Motion"],
      category: "client",
      icon: Globe,
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
    },
    {
      title: "E2 Solutions",
      desc: "An innovative corporate portal for global space and structural consultancy, emphasizing high-fidelity architectural showcases and international business service details.",
      link: "https://celebrated-bienenstitch-9edf19.netlify.app/",
      tech: ["React.js", "CSS Grid", "Vite", "Modern Typography"],
      category: "client",
      icon: Layers,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Reco Architects",
      desc: "A beautiful, content-rich design portfolio for Reco Architects, recognized as one of the premier architectural and space design consultancies operating in Kerala.",
      link: "https://recoo.netlify.app/",
      tech: ["React.js", "CSS3 Flexbox", "Smooth Scrolling", "Grid layouts"],
      category: "client",
      icon: HomeIcon,
      gradient: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400",
    },
    {
      title: "Grandeur Bridal Studio",
      desc: "A sleek, premium landing portfolio for Grandeur, an elite bridal makeover academy and studio managed by Dr. Shruthi Vijayan in Kochi.",
      link: "https://grandeurrr.netlify.app/",
      tech: ["React.js", "Tailwind CSS", "Interactive Slideshows"],
      category: "client",
      icon: Scissors,
      gradient: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
    },
    {
      title: "Find Me Dj",
      desc: "A full-scale, responsive digital platform connecting event host coordinators with verified professional DJs and music planners across Bangalore.",
      link: "https://findmedj.com/",
      tech: ["React.js", "Django", "Tailwind CSS", "Database Integration"],
      category: "client",
      icon: Music,
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Header Banner Section */}
      <section className="px-6 max-w-6xl mx-auto pt-12 pb-8 w-full">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/20 px-3 py-1 rounded-md">
            Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Projects Showcase
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Explore my latest works. Below you'll find custom backend AI platforms from my core software resume alongside production-deployed web platforms built for external clients.
          </p>
        </div>

        {/* Filter Category Switches */}
        <div className="flex flex-wrap justify-center gap-2 mt-12 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                filter === cat.id
                  ? "text-black bg-gradient-to-r from-teal-400 to-teal-500 border-teal-400 shadow-md shadow-teal-400/10"
                  : "text-gray-400 border-gray-800 bg-gray-950/30 hover:text-white hover:border-gray-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid View */}
      <section className="px-6 max-w-6xl mx-auto pb-24 w-full flex-grow">
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((p, i) => {
            const Icon = p.icon || Code;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between glass-panel p-6 md:p-8 rounded-2xl border border-gray-800/80 hover:border-gray-700/80 shadow-2xl transition-all duration-300 transform hover:-translate-y-[2px]"
              >
                {/* Decorative absolute glow element */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${p.gradient} blur-2xl rounded-full opacity-10 group-hover:opacity-30 transition-opacity`} />
                
                <div>
                  {/* Top line with category badge & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gray-900 border border-gray-800/50 ${p.iconColor}`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-950 px-3 py-1 rounded-full border border-gray-800/40">
                      {p.category === "fullstack" ? "PLATFORM" : "LIVE SHOWCASE"}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Bullet Highlights for complex platforms */}
                  {p.highlights && (
                    <ul className="mt-5 space-y-2">
                      {p.highlights.map((bullet, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-gray-500 leading-relaxed flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500/80 mt-1.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer Section: Tech Tags & Links */}
                <div className="mt-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-gray-400 bg-gray-950/60 border border-gray-800/40 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Custom Action Trigger */}
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-400 hover:text-teal-300 hover:underline cursor-pointer"
                    >
                      Visit Live Site
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Core Resume Work
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
