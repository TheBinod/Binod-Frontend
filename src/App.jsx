import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import "./App.css"

function App() {
  
    const router = createBrowserRouter ([
      {
        path : "/",
        element : <><Navbar/><Body/></>
      },
      {
        path : "/contact",
        element : <><Navbar/><Contact/></>
      },
      {
        path : "/about",
        element : <><Navbar/><About/></>
      },
      {
        path : "/portfolio",
        element : <><Navbar/><Portfolio/></>
      },
      {
        path : "/blog",
        element : <><Navbar/><Blog/></>
      }
    ])

  return (
    <>
    
    <RouterProvider router = {router}/>


    </>
  )
}

export default App
