import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import GetContactFormData from './components/GetContactFormData.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import APIPage, { FetchForLoader } from './components/APIPage.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/contact/get-contact-form',
      element: <GetContactFormData />
    },
    {
      path: '/get-api',
      loader: FetchForLoader,
      element: <APIPage />
    },
    {
      path: '*',
      element: <ErrorPage />
    }

  ],
}]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* No need to wrap App.jsx inside RouterProvider instead use this as main home element of route */}
  </StrictMode>,
)
