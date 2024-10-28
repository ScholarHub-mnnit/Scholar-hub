import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='min-h-screen w-full flex flex-col dark:bg-black'>
      <Header />
      <div className='flex-grow flex justify-center items-center'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout