import React from 'react'

function Resume() {
  return (
    <div>
        <section className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Resume</h2>
            <p className="text-gray-600 mb-4">
                Download my resume to learn more about my skills & experience.
            </p>
            <a 
                href="../../public/vivek_resume.pdf" 
                download 
                className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-600 transition"
            >
                Download Resume
            </a>
        </section>
    </div>
  )
}

export default Resume
