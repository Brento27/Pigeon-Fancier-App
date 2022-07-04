import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/NavBar"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import PigeonDetails from "./components/pages/PigeonDetails"
import { Pigeons, Lofts } from "./data"

function App() {
  const [pigeons, setPigeons] = useState(Pigeons)
  const [currPigeon, setCurrPigeon] = useState({})
  const [lofts, setLofts] = useState(Lofts)
  const [currLofts, setCurrLofts] = useState({})

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main className="container mx-auto p-12 bg-primary rounded-lg ">
          <Routes>
            <Route
              path="/"
              element={<Home pigeons={pigeons} setCurrPigeon={setCurrPigeon} />}
            />
            <Route
              path="/my-pigeons/:id"
              element={<PigeonDetails pigeon={currPigeon} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
