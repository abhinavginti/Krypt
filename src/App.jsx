import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'

function App() {
  return (
    <section className="gradient-bg-welcome min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
      </Routes>
    </section>
  )
}

export default App
