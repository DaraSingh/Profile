// src/pages/Home.jsx
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-indigo-950 via-purple-900 to-black mt-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center min-h-screen text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Hi, I’m Dara 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
          I’m a passionate <span className="text-purple-400 font-semibold">MERN stack developer</span> 
          who loves building interactive web apps and exploring AI-driven solutions. 
          Welcome to my portfolio!
        </p>

        {/* Call-to-Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          
        </div>

        {/* About Section */}
        <div className="max-w-3xl text-left md:text-center">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
            I am a <span className="text-purple-400 font-semibold">Mathematics & Computing </span> student 
            at <span className="text-pink-400 font-semibold">Delhi Technological University </span> 
            with an excellent academic background, holding a <span className="font-semibold text-purple-300">CGPA of 8.53</span>.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            With strong fundamentals in problem-solving, algorithms, and programming, 
            I am passionate about building meaningful applications and continuously 
            learning emerging technologies in web development and AI.
          </p>

          {/* Resume & LinkedIn Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <a 
              href="https://drive.google.com/file/d/154-EnXb5zYtDZQCC9uZcxrmAoVFInjaf/view?usp=sharing" 
              target="_blank"
          rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium shadow-lg"
            >
              📄 View Resume
            </a>

            <Link 
            to="/projects" 
            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-medium shadow-lg"
          >
            🚀 View My Projects
          </Link>
          <a 
            href="https://github.com/darasingh" 
            target="_blank"
          rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium shadow-lg"
          >
            💻 Visit GitHub
          </a>
          </div>
        </div>
      </section>

      {/* Optional Placeholder Section for Visual Balance */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-white text-center">
        <h2 className="text-4xl font-bold mb-4 text-purple-400">More Coming Soon...</h2>
        <p className="text-gray-300 max-w-2xl">
          Stay tuned for my Achievements, Projects, and Contact sections!
        </p>
      </section>
    </div>
    
  )
}
