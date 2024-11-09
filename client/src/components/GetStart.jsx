import React from 'react'

function GetStart({getStart,setGetStarted}) {
    return (
        <div className='pb-1'>
            <button className="dark:hover:bg-gray-900 dark:bg-gray-950 bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold 
            py-2 px-4 border dark:border-neutral-800 dark:hover:border-black border-blue-700 rounded text-md" onClick={setGetStarted}>
                {getStart}
            </button>
        </div>
    )
}

export default GetStart