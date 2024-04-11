import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer';

import { Outlet } from 'react-router-dom';
import Sticky from './pages/sticky';
export default function layout() {
  return (
    <>
    <Navbar />
    <Sticky />
    <Outlet />
    <Footer />
    </>
  )
}
