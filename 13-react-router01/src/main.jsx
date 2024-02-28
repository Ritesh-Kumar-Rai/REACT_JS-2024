import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import User from './components/User.jsx';
import NextMcuMovie, { fetchWhileHover } from './components/NextMcuMovie.jsx';


/*const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contact",
        element : <Contact/>
      }
    
    ]
  }
]);*/

// Another way for Routing

const router = createBrowserRouter(
  createRoutesFromElements(
    // At the first subroute "" you can use index instead of path=''
    <Route path='/' element= {<App/>} errorElement={<ErrorPage/>}>
        <Route path='' element={<Home/>}/> 
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='params/:name/:email/:tel' element={<User/>}/>
        <Route path='nextmcumovie' loader={fetchWhileHover} element={<NextMcuMovie/>} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
