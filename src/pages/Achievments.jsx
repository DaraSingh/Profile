import React from 'react'
function Achievments() {
  return (
    <div>
      <section className="min-h-screen flex flex-col items-center px-6 text-white text-center mt-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Achievements
      </h1>

      <div className="max-w-3xl space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
        <p>
          🚀 Solved <span className="font-semibold text-purple-400">thousands of DSA problems</span> across multiple platforms, 
          developing strong <span className="text-pink-400">problem-solving skills</span> and algorithmic thinking.
        </p>

        <p>
          🏆 <span className="text-green-400 font-semibold">LeetCode Rating:</span> <span className="text-white font-bold">1848</span>, 
          ranked as <span className="text-purple-400">Knight (Top 5.92% globally)</span> with an 
          incredible <span className="text-pink-400 font-semibold">500+ day streak</span>.
        </p>

        <p>
          🔥 <span className="text-yellow-400 font-semibold">CodeChef Rating:</span> <span className="text-white font-bold">1612</span>, 
          consistently demonstrating competitive programming skills.
        </p>
      </div>

      {/* Call to action buttons */}
      
      <div className="mt-10 flex gap-4">
        <a
          href="https://leetcode.com/u/Dara_2001/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium shadow-lg"
        >
          🧩 View LeetCode
        </a>
        <a
          href="https://www.codechef.com/users/dara2001"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium shadow-lg"
        >
        🍴 View Codechef
        </a>
        
        <a
        href="https://www.geeksforgeeks.org/user/desd2je79/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium shadow-lg"
        >
        💻 View GFG
        </a>
      </div>
    </section>
    </div>
  )
}

export default Achievments
