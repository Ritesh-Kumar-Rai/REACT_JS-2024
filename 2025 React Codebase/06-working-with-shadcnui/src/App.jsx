import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/custom_uis/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <main className='p-5 h-screen w-full border'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<section className='w-full h-full flex items-center justify-center text-2xl font-bold'>Oops! 404 Page Not Found</section>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
