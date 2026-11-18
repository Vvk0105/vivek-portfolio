import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const skillGroups = [
  { title: "AI and Automation", items: ["AI-assisted classification", "LLM API integration", "Prompt engineering", "RPA"] },
  { title: "Backend", items: ["Python", "Django", "DRF", "FastAPI", "Celery", "Redis", "Microservices"] },
  { title: "Frontend", items: ["React", "TypeScript", "Redux", "TanStack Query", "Tailwind CSS"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "SQL optimization"] },
  { title: "Cloud and DevOps", items: ["AWS EC2", "Docker", "Nginx", "Gunicorn", "Linux"] },
  { title: "Integrations and Security", items: ["Stripe", "Razorpay", "JWT", "OAuth", "RBAC"] },
];

const stats = [
  { n: "2+ yrs", l: "Professional experience" },
  { n: "US Healthcare", l: "Claims, eligibility, payments, CRM" },
  { n: "15+", l: "REST APIs delivered" },
  { n: "AI + RPA", l: "Workflow automation" },
];

const experience = [
  {
    role: "Software Developer, Tensaw Technologies",
    date: "Nov 2025 to Present | Kochi, Kerala",
    points: [
      "Build and maintain US healthcare claims, eligibility, payment and CRM portals with React, TypeScript, Redux and TanStack Query.",
      "Ship AI-assisted claim denial workflows that reduce manual review time.",
      "Integrate AI services and RPA automation with backend APIs in Agile sprints.",
    ],
  },
  {
    role: "Full Stack Developer, Srishti Innovative",
    date: "Jul 2024 to Nov 2025 | Kerala",
    points: [
      "Built Django, DRF, React and MySQL applications for hospitality and business platforms.",
      "Delivered 15+ REST APIs, JWT authentication, role-based access and payment gateway integration.",
      "Optimized SQL queries and maintained production deployments on AWS EC2 with Docker and Nginx.",
    ],
  },
];

function Home() {
  return (
    <div>
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <span className="inline-block text-sm px-3 py-1 rounded-full border border-gray-700 text-teal-400 bg-gray-800">
          Open to full stack and AI integration roles
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-5">
          I'm Vivek Babu. I build{" "}
          <span className="bg-gradient-to-r from-teal-300 to-indigo-400 bg-clip-text text-transparent">
            AI-assisted healthcare software
          </span>{" "}
          teams use every day.
        </h1>
        <p className="text-lg text-gray-400 mt-5 max-w-3xl">
          Full Stack Developer in Kochi, India with 2+ years of experience. I work on US healthcare claims,
          eligibility, payment and CRM applications with Python, Django, FastAPI, React and TypeScript,
          adding AI and RPA automation where it saves people time.
        </p>
        <div className="flex flex-wrap gap-3 mt-7">
          <Link to="/projects" className="bg-teal-500 text-gray-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-teal-400 transition">
            View projects
          </Link>
          <Link to="/resume" className="px-6 py-2.5 rounded-lg border border-gray-600 hover:border-teal-400 transition">
            Resume
          </Link>
          <a href="mailto:vivekbabu0105@gmail.com" className="px-6 py-2.5 rounded-lg border border-gray-600 hover:border-teal-400 transition">
            Email me
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((s) => (
            <div key={s.l} className="p-4 rounded-xl border border-gray-700 bg-gray-800/60">
              <div className="text-xl font-bold">{s.n}</div>
              <div className="text-sm text-gray-400">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="border-l-2 border-gray-700 ml-1.5">
          {experience.map((e) => (
            <div key={e.role} className="relative pl-6 pb-8">
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-teal-400" />
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <div className="text-sm text-gray-400">{e.date}</div>
              <ul className="list-disc pl-5 mt-2 text-gray-400 space-y-1">
                {e.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="p-5 rounded-xl border border-gray-700 bg-gray-800/60">
              <h3 className="font-semibold mb-3">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-gray-900 border border-gray-700">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About me</h2>
        <p className="text-gray-400 text-lg">
          I'm a software developer with an MCA, currently building US healthcare applications for claims,
          eligibility and payments. I enjoy turning slow manual workflows into reliable software, using AI
          and RPA where they help, and shipping features that people use in production.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Home
