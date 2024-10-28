import React, { useState } from 'react'
import GetStart from './GetStart';

function Header() {
  const [getStart,setGetStarted] = useState(true);

  return (
    <header className='shadow z-50 w-full h-16 px-[2px] pb-[2px]'>
        <nav className='dark:bg-gray-950 sm:px-10 px-4 bg-blue-400  border-b-2 dark:border-neutral-800 border-gray-300 rounded-md box-border flex justify-between items-center h-full'>
        <div className="logo font-black text-2xl text-white">ScholarHub</div>
        <div>
          <GetStart getStart={getStart} setGetStarted={setGetStarted}/>
        </div>
        </nav>
    </header>
  )
}

export default Header