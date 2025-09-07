import React from 'react'
import Footer from '../components/Footer'

function Resume() {
  return (
    <div className='flex flex-col min-h-screen'>
        <section className="p-10 text-center flex flex-col justify-center items-center h-[60vh]">
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
        <Footer/>
    </div>
  )
}

export default Resume
