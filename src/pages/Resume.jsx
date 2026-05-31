import React from "react";
import Footer from "../components/Footer";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Terminal,
  ExternalLink,
  ChevronRight
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

export default function Resume() {
  const contactInfo = [
    { icon: Phone, text: "+91 7306533356", href: "tel:+917306533356" },
    { icon: Mail, text: "vivekbabu0105@gmail.com", href: "mailto:vivekbabu0105@gmail.com" },
    { icon: MapPin, text: "Kochi, Kerala, India", href: null },
    { icon: LinkedinIcon, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/vivek-babu-151442248" },
    { icon: GithubIcon, text: "GitHub Profile", href: "https://github.com/Vvk0105" },
  ];

  const skillGroups = [
    { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "SQL"] },
    { title: "Backend", skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Celery", "Redis", "WebSockets"] },
    { title: "Frontend", skills: ["React.js", "Redux", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { title: "Databases", skills: ["MySQL", "PostgreSQL"] },
    { title: "Cloud & DevOps", skills: ["AWS EC2", "Docker", "Nginx", "Gunicorn", "Linux"] },
    { title: "Tools & Integrations", skills: ["Git", "GitHub", "Stripe", "Razorpay", "JWT / OAuth", "REST APIs", "Microservices"] },
  ];

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
        "Integrated payment gateway solutions and optimized backend services for improved performance.",
        "Designed and maintained relational database schemas and optimized SQL queries.",
        "Participated in deployment, maintenance, and feature enhancement activities across multiple projects."
      ],
    },
  ];

  const education = [
    {
      institution: "SCMS School of Technology and Management",
      degree: "Master of Computer Applications (MCA)",
      duration: "2022 -- 2024",
      location: "Kerala, India",
    },
    {
      institution: "Parumala Mar Gregorios College",
      degree: "Bachelor of Computer Applications (BCA)",
      duration: "2019 -- 2022",
      location: "Kerala, India",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Hero section / Header */}
      <section className="px-6 max-w-4xl mx-auto pt-12 pb-6 w-full flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-900">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Curriculum Vitae
          </h1>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            Detailed breakdown of my professional skills, career path, and achievements.
          </p>
        </div>

        {/* Download CV CTA */}
        <a
          href="/vivek_resume.pdf"
          download="Vivek_Babu_Resume.pdf"
          className="group self-start md:self-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 shadow-md shadow-teal-500/10 flex items-center gap-2 transition-all hover:translate-y-[-1px] cursor-pointer"
        >
          <Download size={15} className="group-hover:animate-bounce" />
          Download PDF Copy
        </a>
      </section>

      {/* Main Interactive CV Sheet */}
      <section className="px-6 max-w-4xl mx-auto py-16 w-full flex-grow space-y-12">
        {/* Quick Contact Widget Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            const content = (
              <div key={idx} className="glass-panel p-4 rounded-xl border border-gray-800/60 flex items-center gap-3 shadow hover:bg-gray-950/20 transition-all">
                <div className="p-2.5 rounded-lg bg-gray-900 text-teal-400 border border-gray-800/40">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-300 truncate">
                  {info.text}
                </span>
              </div>
            );

            return info.href ? (
              <a
                key={idx}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:scale-[1.01] transition-transform"
              >
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>

        {/* Professional Summary Widget */}
        <div className="glass-panel p-6 md:p-8 rounded-2xl border border-gray-800/80 shadow-2xl space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-gray-900 pb-3">
            <span className="w-1.5 h-6 bg-teal-400 rounded-full" />
            Professional Summary
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Software Developer with 2 years of experience building scalable web applications using Python, Django, FastAPI, React, TypeScript, and PostgreSQL/MySQL. Experienced in full-stack development, AI integrations, healthcare CRM systems, payment gateway integrations, and cloud deployment. Strong expertise in REST APIs, scalable architectures, and delivering business-focused software solutions.
          </p>
        </div>

        {/* Experience Timelines */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-gray-900 pb-3">
            <span className="w-1.5 h-6 bg-teal-400 rounded-full" />
            <Briefcase size={18} className="text-teal-400" />
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-panel p-6 md:p-8 rounded-2xl border border-gray-800/80 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-900/60 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-teal-400 text-sm font-semibold">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500 sm:text-right">
                    <span className="bg-gray-950 px-2 py-1 rounded border border-gray-800/50">
                      {exp.duration}
                    </span>
                    <span className="bg-gray-950 px-2 py-1 rounded border border-gray-800/50">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((bullet, index) => (
                    <li key={index} className="text-gray-400 text-xs md:text-sm leading-relaxed flex items-start gap-2">
                      <ChevronRight size={14} className="text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Clusters Grid */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-gray-900 pb-3">
            <span className="w-1.5 h-6 bg-teal-400 rounded-full" />
            <Terminal size={18} className="text-teal-400" />
            Technical Skill Matrix
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl border border-gray-800/80 hover:border-gray-700/80 shadow transition-all space-y-3">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-400">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-300 bg-gray-950/60 border border-gray-850 px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline widgets */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-gray-900 pb-3">
            <span className="w-1.5 h-6 bg-teal-400 rounded-full" />
            <GraduationCap size={18} className="text-teal-400" />
            Education Details
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {education.map((edu, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl border border-gray-800/80 shadow-md space-y-3">
                <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-950 px-2.5 py-1 rounded-md border border-gray-900 self-start">
                  {edu.duration}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-xs md:text-sm text-teal-400 font-semibold mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1">
                    {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
