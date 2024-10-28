import React from 'react'

function Cards({feature,description}) {
  return (
    <div className="dark:bg-gray-950 border dark:border-neutral-800 rounded-xl bg-white p-6 text-center shadow-xl">
    <h1 class="dark:text-gray-400 text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">{feature}</h1>
    <p class="px-4 text-gray-500 dark:text-gray-400">{description}</p>
  </div>
  )
}

export default Cards
