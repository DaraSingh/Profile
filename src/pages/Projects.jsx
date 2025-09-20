import React from 'react'

function Projects() {
    const projects = [
    {
      title: "BagShop – E-commerce Platform for Bags",
      description:
        "BagShop is a full-stack e-commerce web application built to provide a seamless shopping experience for users looking for high-quality bags. The platform allows users to browse products, add items to cart, and securely checkout. Admins can manage inventory, update product details, and track orders efficiently..",
      tech: ["MongoDB", "Express", "EJS", "Node.js", "Tailwind"],
      link: "https://github.com/DaraSingh/BagShop",
      demo: "https://bagshop-wwfk.onrender.com"
    },
    {
      title: "AI Fitness – AI-Powered Fitness Assistant",
      description:
        "Virtual Gym is an interactive fitness web application designed to provide personalized workout and exercise plans using AI-powered recommendations. Users can their specification, and the platform generates customized workout routines.",
      tech: ["React", "Tailwind", "OpenAI API","MongoDB","Express","React","Node.js"],
      link: "https://github.com/DaraSingh/VirtualGym-Frontend",
      demo: "https://aivirtualgym.netlify.app"
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive personal portfolio built with React, Vite, and Tailwind showcasing projects and achievements.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://github.com/DaraSingh/Profile",
      demo: "https://daraprofile.netlify.app/"
    }
  ]
  return (
       <section className="min-h-screen flex flex-col items-center px-6 py-12 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        My Projects 🚀
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition transform duration-300"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-purple-400">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-sm font-medium"
              >
                🔗 Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
                >
                  🌐 Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
