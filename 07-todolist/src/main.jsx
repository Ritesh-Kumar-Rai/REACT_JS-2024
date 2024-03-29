import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Heading from './Components/Heading.jsx'
import Footer from './Components/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
