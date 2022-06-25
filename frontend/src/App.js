import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/NavBar"
import Home from "./components/pages/Home"

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main className="container mx-auto px-12 pb-12 bg-primary">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
