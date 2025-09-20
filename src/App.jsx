import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Achievments from './pages/Achievments'

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Navbar /> {/* Always visible */}
          <div className="p-4 bg-gradient-to-b from-black via-indigo-950 via-purple-900 to-black min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievments" element={<Achievments />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
