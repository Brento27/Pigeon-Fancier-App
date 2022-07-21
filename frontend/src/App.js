import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import PigeonDetails from './components/pages/PigeonDetails';
import RaceImport from './components/pages/RaceImport';
import { PigeonProvider } from './context/pigeons/PigeonContext';

function App() {
  return (
    <PigeonProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <NavBar />
          <main className='container mx-auto p-12 bg-primary rounded-lg '>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/my-pigeons/:id' element={<PigeonDetails />} />
              <Route path='/races/import' element={<RaceImport />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PigeonProvider>
  );
}

export default App;
