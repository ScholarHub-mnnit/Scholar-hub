import React from 'react'
import Goal from '../components/GoalComp'


function Goals() {
  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">
        Goals
      </h1>
      <Goal />
    </div>
  )
}

export default Goals