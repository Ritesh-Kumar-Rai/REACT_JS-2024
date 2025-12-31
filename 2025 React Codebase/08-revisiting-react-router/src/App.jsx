import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="text-center py-4 border-top text-muted small">
        © 2025 Minimal Todo Inc.
      </footer>
    </>
  )
}

export default App
