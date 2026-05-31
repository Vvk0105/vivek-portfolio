import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  Briefcase,
  Calendar,
  MapPin,
  ArrowRight,
  Terminal,
  Server,
  Layout,
  Database,
  Globe,
  Sparkles,
  ChevronRight,
  Mail,
  FileText
} from "lucide-react";

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

export default function Home() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "25+", label: "Technologies Mastered" },
    { number: "100%", label: "Clean Code Focus" },
  ];

  const skillCategories = [
    { id: "all", name: "All Skills", icon: Terminal },
    { id: "languages", name: "Languages", icon: Terminal },
    { id: "backend", name: "Backend", icon: Server },
    { id: "frontend", name: "Frontend", icon: Layout },
    { id: "databases", name: "Databases", icon: Database },
    { id: "cloud", name: "Cloud & Tools", icon: Globe },
  ];

  const skills = [
    { name: "Python", category: "languages", level: "Expert" },
    { name: "JavaScript", category: "languages", level: "Expert" },
    { name: "TypeScript", category: "languages", level: "Advanced" },
    { name: "SQL", category: "languages", level: "Advanced" },
    
    { name: "Django", category: "backend", level: "Expert" },
    { name: "FastAPI", category: "backend", level: "Expert" },
    { name: "Django REST Framework (DRF)", category: "backend", level: "Expert" },
    { name: "Celery", category: "backend", level: "Advanced" },
    { name: "Redis", category: "backend", level: "Advanced" },
    { name: "WebSockets", category: "backend", level: "Intermediate" },
    
    { name: "React.js", category: "frontend", level: "Expert" },
    { name: "Redux", category: "frontend", level: "Advanced" },
    { name: "Tailwind CSS", category: "frontend", level: "Expert" },
    { name: "HTML5", category: "frontend", level: "Expert" },
    { name: "CSS3", category: "frontend", level: "Expert" },
    
    { name: "PostgreSQL", category: "databases", level: "Advanced" },
    { name: "MySQL", category: "databases", level: "Advanced" },
    
    { name: "AWS EC2", category: "cloud", level: "Advanced" },
    { name: "Docker", category: "cloud", level: "Advanced" },
    { name: "Nginx", category: "cloud", level: "Advanced" },
    { name: "Gunicorn", category: "cloud", level: "Advanced" },
    { name: "Git & GitHub", category: "cloud", level: "Expert" },
    { name: "Stripe", category: "cloud", level: "Advanced" },
    { name: "Razorpay", category: "cloud", level: "Advanced" },
    { name: "JWT / OAuth", category: "cloud", level: "Expert" },
    { name: "REST APIs", category: "cloud", level: "Expert" },
  ];

  const filteredSkills =
    activeSkillCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeSkillCategory);

  const experiences = [
    {
      company: "Tensaw Technologies",
      role: "Software Developer",
      duration: "Nov 2025 -- Present",
      location: "Kochi, Kerala",
      highlights: [
        "Developed and maintained enterprise healthcare applications using React, TypeScript, and Redux.",
        "Implemented new business workflows, resolved production issues, and delivered feature enhancements across CRM platforms.",
        "Integrated AI-powered solutions to streamline operational processes and improve productivity.",
        "Contributed to a Claim Denial Analysis platform that classifies denied healthcare claims and assists analysts in identifying root causes and corrective actions.",
        "Collaborated with backend teams to integrate APIs and deliver scalable, responsive user experiences."
      ],
    },
    {
      company: "Srishti Innovative",
      role: "Full Stack Developer",
      duration: "Jul 2024 -- Nov 2025",
      location: "Kerala",
      highlights: [
        "Developed full-stack web applications using Django, DRF, React, and MySQL.",
        "Built REST APIs, authentication systems, role-based access controls, and database-driven business workflows.",
        "Integrated payment gateway solutions (Stripe, Razorpay) and optimized backend services for improved performance.",
        "Designed and maintained relational database schemas and optimized complex SQL queries.",
        "Participated in cloud deployment, server maintenance, and feature enhancement activities."
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-teal-500/10 blur-[120px] animate-glow-1 pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-indigo-500/10 blur-[100px] animate-glow-2 pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative px-6 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center pt-8 pb-16">
        {/* Availability Badge */}
        <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-teal-950/40 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-teal-400 shadow-md shadow-teal-400" />
          Available for Opportunities
        </div>

        {/* Greetings */}
        <div className="space-y-4">
          <p className="text-base md:text-lg font-semibold tracking-wider text-teal-400 flex items-center gap-2">
            <Sparkles size={16} /> Hi, my name is
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-none">
            Vivek Babu
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-400 max-w-3xl leading-tight">
            I craft scalable backends and intelligent user interfaces.
          </h2>
        </div>

        {/* Short Summary Description */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          I am a Software Developer with 2 years of professional experience specializing in Python (Django, FastAPI), React, TypeScript, and database architectures. I build secure healthcare CRMs, payment pipelines, and AI-powered workflow assistants.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <Link
            to="/projects"
            className="group px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-black bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 shadow-lg shadow-teal-500/15 flex items-center gap-2 transition-all hover:translate-y-[-1px]"
          >
            Explore Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/resume"
            className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-gray-300 border border-gray-800 bg-gray-900/40 hover:bg-gray-800 hover:text-white transition-all flex items-center gap-2"
          >
            <FileText size={16} className="text-teal-400" />
            View Full CV
          </Link>
        </div>

        {/* Quick Social Links */}
        <div className="mt-12 flex gap-5 text-gray-500">
          <a
            href="https://github.com/Vvk0105"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-babu-151442248/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:vivekbabu0105@gmail.com"
            className="hover:text-cyan-400 transition-colors"
            title="Email Me"
          >
            <Mail size={20} />
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-900 bg-[#080d1a] py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-bold mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/20 px-3 py-1 rounded-md">
            Background
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Developing Systems that Enable Business Growth.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a full-stack engineer driven by building software solutions that have immediate, practical business value. Over the past two years, my focus has shifted from standard content managers to sophisticated healthcare products, AI interview automation, and high-performance financial systems.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I hold a Master's in Computer Applications (MCA) which roots my practical engineering experience in deep computational concepts. I specialize in backend efficiency, asynchronous systems (Celery, Redis), security protocols, and robust relational data designs.
          </p>
        </div>
        <div className="md:col-span-5 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative glass-panel rounded-2xl p-6 border border-gray-800/80 shadow-2xl flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-gray-500">ENGINEER METRICS</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300 font-medium">Backend Systems</span>
                  <span className="text-teal-400">95%</span>
                </div>
                <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-400 h-full w-[95%] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300 font-medium">React & TS UI Architecture</span>
                  <span className="text-indigo-400">88%</span>
                </div>
                <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-400 h-full w-[88%] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300 font-medium">AI & Integrations</span>
                  <span className="text-cyan-400">80%</span>
                </div>
                <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[80%] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300 font-medium">Cloud Deployments</span>
                  <span className="text-emerald-400">82%</span>
                </div>
                <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[82%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase Section */}
      <section className="py-24 px-6 bg-[#080d1a]/60 border-y border-gray-900 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/20 px-3 py-1 rounded-md">
              Stack
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Technical Skillset
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-base">
              A detailed catalog of the tools, frameworks, and programming languages I use to bring robust software platforms to life.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeSkillCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveSkillCategory(category.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
                    isActive
                      ? "text-black bg-gradient-to-r from-teal-400 to-teal-500 border-teal-400 shadow-md shadow-teal-400/10"
                      : "text-gray-400 border-gray-800/80 hover:text-white hover:border-gray-700 bg-gray-950/30"
                  }`}
                >
                  <Icon size={14} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Grid of Filtered Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-4 rounded-xl border border-gray-900 bg-gray-950/40 glow-card hover:bg-gray-950/90 text-center flex flex-col justify-center items-center shadow-lg"
              >
                <div className="text-gray-200 font-bold text-sm tracking-wide group-hover:text-teal-400 transition-colors">
                  {skill.name}
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/20 px-3 py-1 rounded-md">
            Career
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-base">
            Professional track record of building and shipping production-level systems inside top teams.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-gray-800/80 max-w-3xl mx-auto pl-6 md:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-gray-950 border-2 border-teal-500 group-hover:bg-teal-400 transition-colors duration-300 shadow-md shadow-teal-500/20" />
              
              {/* Experience Card */}
              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-gray-800/80 hover:border-gray-700/80 shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <span className="text-teal-400 font-semibold text-sm">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-1.5 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 bg-gray-950 px-2.5 py-1 rounded-md border border-gray-800/50">
                      <Calendar size={12} className="text-teal-500" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gray-950 px-2.5 py-1 rounded-md border border-gray-800/50">
                      <MapPin size={12} className="text-teal-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights Bullet List */}
                <ul className="space-y-3.5 mt-6">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start gap-2">
                      <ChevronRight size={16} className="text-teal-400 flex-shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-indigo-500/5 rounded-3xl blur-md border border-gray-800/30 -z-10" />
        <div className="glass-panel p-10 md:p-14 rounded-3xl border border-gray-800/60 shadow-2xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let's Collaborate On Your Next Project
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            Whether you need a scalable API, a custom payment integration, or a robust dashboard frontend, I am available to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="mailto:vivekbabu0105@gmail.com"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-black bg-teal-400 hover:bg-teal-300 shadow-md shadow-teal-400/10 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Mail size={16} />
              Email Me Directly
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-babu-151442248/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-gray-300 border border-gray-800 hover:bg-gray-800 hover:text-white transition-all flex items-center gap-2"
            >
              <LinkedinIcon className="text-teal-400 w-[16px] h-[16px]" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
