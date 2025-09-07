import React from 'react'
const projects = [
  { title: "Lumiya", desc: "Event Planning and Production company", link: "https://lumiya.netlify.app/" },
  { title: "E2 Solutions", desc: "Innovating Space and Service with Global Insight", link: "https://celebrated-bienenstitch-9edf19.netlify.app/" },
  { title: "Reco", desc: "Reco Architects is a premier design firm recognized as one of the best architects in Kerala.", link: "https://recoo.netlify.app/" },
  { title: "Grandeur", desc: "Grandeur by Dr Shruthi is a premium bridal makeover studio and academy by Dr Shruthi Vijayan. ", link: "https://grandeurrr.netlify.app/" },
  { title: "Find Me Dj", desc: "Dj Booking in bangalore", link: "https://findmedj.com/" },
];

function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
            <a href={p.link} className="text-teal-500 hover:underline mt-2 block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
