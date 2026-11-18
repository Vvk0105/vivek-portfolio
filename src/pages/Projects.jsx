import React from 'react'
import Footer from '../components/Footer';

const featured = [
  {
    tag: "AI Integration",
    title: "AI Claim Denial Analysis Platform",
    desc: "AI-assisted workflow that classifies denied US healthcare claims and points analysts to likely root causes, cutting manual review time.",
    points: [
      "AI-assisted classification of denied claims",
      "APIs and analyst review screens with TanStack Query for fast, cached data loading",
    ],
    stack: ["React", "TypeScript", "TanStack Query", "Python", "AI / LLM", "REST APIs"],
    wide: true,
  },
  {
    tag: "RPA | Eligibility",
    title: "Eligibility Verification Portal",
    desc: "Portal where front-office staff check patient insurance eligibility. RPA bots run the payer checks and return results to the user.",
    points: ["Request, status tracking and error handling in the UI", "API layer between the portal and the automation"],
    stack: ["React", "TypeScript", "RPA", "REST APIs"],
  },
  {
    tag: "Payments | CRM",
    title: "Healthcare CRM and Payment Portal",
    desc: "Patient management, appointments, billing and online payments in one system for daily clinical operations.",
    points: ["Stripe payment workflows", "Secure REST APIs with role-based access"],
    stack: ["React", "Redux", "Django", "Stripe", "JWT"],
  },
  {
    tag: "Earlier work | Payments",
    title: "Hotel Booking Platform (Hourly Stay)",
    desc: "Full stack booking system with authentication, reservation tracking and Razorpay payments.",
    points: [],
    stack: ["Django", "DRF", "React", "MySQL", "Razorpay"],
    wide: true,
  },
];

const websites = [
  { title: "Lumiya", desc: "Event planning and production company", link: "https://lumiya.netlify.app/" },
  { title: "E2 Solutions", desc: "Innovating space and service with global insight", link: "https://celebrated-bienenstitch-9edf19.netlify.app/" },
  { title: "Reco", desc: "Website for Reco Architects, a design firm in Kerala", link: "https://recoo.netlify.app/" },
  { title: "Grandeur", desc: "Bridal makeover studio and academy by Dr Shruthi Vijayan", link: "https://grandeurrr.netlify.app/" },
  { title: "Find Me Dj", desc: "DJ booking platform in Bangalore", link: "https://findmedj.com/" },
];

function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="px-6 py-14 max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-2">Featured projects</h2>
        <p className="text-gray-400 mb-8">Production healthcare work first, then earlier projects.</p>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p, i) => (
            <article
              key={i}
              className={`p-6 rounded-2xl border border-gray-700 bg-gray-800/60 hover:border-teal-400 hover:-translate-y-1 transition ${p.wide ? "md:col-span-2" : ""}`}
            >
              <span className="text-xs uppercase tracking-widest text-teal-400">{p.tag}</span>
              <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              {p.points.length > 0 && (
                <ul className="list-disc pl-5 mt-3 text-gray-400 space-y-1">
                  {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-gray-900 border border-gray-700">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-5">
          Company projects are described in general terms. No client data, screenshots or code are shown.
        </p>

        <h2 className="text-3xl font-bold mt-16 mb-2">Live websites</h2>
        <p className="text-gray-400 mb-6">Frontend and website projects I built for clients.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {websites.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-gray-700 bg-gray-800/40 hover:border-teal-400 transition block"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{p.desc}</p>
              <span className="text-teal-400 text-sm mt-3 block">Visit site</span>
            </a>
          ))}
        </div>
      </section>
      <div className="mt-auto"><Footer /></div>
    </div>
  )
}

export default Projects
