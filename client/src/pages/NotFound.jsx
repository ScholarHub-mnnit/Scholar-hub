import React from 'react'
import Logo from '../components/Logo'

function NotFound() {
  return (
    <div className='dark:bg-gray-950 bg-blue-400 flex justify-center items-center min-h-screen text-white'>
      <div className='flex flex-col justify-center items-center'>
        <Logo className={"px-2 mb-6 text-6xl border-b drop-shadow-md"}/>
        <div className="404 text-4xl font-black font-serif">
          OOps!
        </div>
        <div className="msg font-medium text-sm py-2 font-serif">
          Go BACK! Page not exist!
        </div>
      </div>
    </div>
  )
}

export default NotFound