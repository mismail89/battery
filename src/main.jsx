import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Layout from './layout.jsx';
import Home from './pages/home'
import Sticky from './pages/sticky';
import Battery from './pages/battery';
import Footer from './components/footer';
import About from './pages/about';
import Jumpstart from './pages/jumpstart';
import Contact from './pages/contact';
import Uae from './pages/uae.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
     
      {
        path: "/battery-replacement",
        element: <Battery />
      },
      {
        path: "/Battery-Change-in-UAE",
        element: <Uae />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/jumpstart",
        element: <Jumpstart />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
