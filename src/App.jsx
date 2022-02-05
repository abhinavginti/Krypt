import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import Transactions from './components/Transactions/Transactions'

function App() {
  return (
    <section className="gradient-bg-welcome min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/transactions' element={<Transactions />} />
      </Routes>
    </section>
  )
}

export default App
