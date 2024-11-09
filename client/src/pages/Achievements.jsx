import React from 'react'
import Achievement from '../components/Achievement'

function Achievements() {
  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">
        Academic Achievements
      </h1>
      <Achievement />
    </div>
  )
}

export default Achievements