import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home.jsx';
import Careers from './components/Careers.jsx';
import About from './components/About.jsx';
import Contact, { ContactFormAction } from './components/Contact.jsx';
import NotFound404 from './components/NotFound404.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/careers', element: <Careers /> },
      { path: '/about', element: <About /> },
      { path: '/contact-us', element: <Contact />, action: ContactFormAction },
    ]
  },
  {
    path: '*',
    element: <NotFound404 />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
