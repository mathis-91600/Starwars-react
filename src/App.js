import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'
import Film from './pages/films/Film'


function App() {
  
  return (
    <div className="App">
        <Header />

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="film:id" element={<Film />} />
        </Routes>
    </div>
  )
}

export default App
