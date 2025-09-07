import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <section className="p-10 max-w-[1000px] mx-auto h-[90vh] flex flex-col justify-center gap-4">
        <h2 className='text-lg text-teal-500'>Hi, my name is</h2>
        <h2 className="text-8xl font-bold mb-4">Vivek Babu</h2>
        <p className="text-lg text-gray-600">
          A passionate web developer who builds both static and dynamic websites with a focus on creating smooth, user-friendly experiences. I enjoy working on interactive and visually engaging projects, often exploring animations and modern frontend practices to make websites more lively and memorable.
        </p>
        <Link
          to="/projects"
          className="inline-block self-start mt-3 bg-teal-500 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-600 transition"
        >
          My Projects
        </Link>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {[
            "Python",
            "Django",
            "React",
            "Tailwind",
            "HTML",
            "CSS",
            "SQL",
            "Git",
          ].map((skill, i) => (
            <div
              key={i}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition dark:border-gray-700 dark:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 text-lg">
          I am a software developer with hands-on experience in Python, Django,
          and React. I love building applications that combine functionality
          with great user experience. My recent work includes AI-based apps,
          content platforms, and frontend clones of popular platforms like
          Netflix. When I'm not coding, I enjoy learning new frameworks,
          exploring UI animations, and refining my problem-solving skills.
        </p>
      </section>
      <Footer/>
    </div>
  );
}


export default Home
