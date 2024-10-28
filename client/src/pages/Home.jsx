import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Cards from '../components/Cards'
import { data } from '../Data/features'

function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col dark:bg-black'>
      <Header />
      <div className='flex-grow h-full mx-2 md:mx-4 mt-1'>
          <div className="dark:bg-neutral-900/50 border dark:border-neutral-800 shadow h-5/6 pb-12 flex sm:flex-row flex-col justify-items-end items-center
         rounded-lg text-center " >
            <div className=''><img src='/src/assets/img1.png' className="object-cover h-full w-full" />
            </div>
            <div className='sm:w-1/2 w-3/4'>
            <h1 class="dark:bg-gradient-to-b dark:from-white dark:to-gray-400 dark:bg-clip-text dark:text-transparent text-2xl sm:text-4xl font-bold my-2 sm:my-4 ">Welcome to ScholarHub</h1>
            <p class="sm:my-2 my-6 mx-auto text-lg dark:text-gray-400">We understand that managing your academic life can be challenging. Our platform is designed to streamline your daily tasks, ensuring you stay organized and focused on what truly matters—your education and personal growth.</p>
            </div>
          </div>
        <div className=' sm:-mt-20 -mt-6 mb-1 w-full grid grid-cols-2 gap-4 sm:grid-cols-4'>
          {
            data.length > 0 && data.map((item) => <Cards {...item} />)
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home