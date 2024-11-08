import React from 'react'
import LeaderBoardComp from '../components/LeaderBoardComp'
import BarChart from '../components/BarChart'
import TaskPieChart from '../components/TaskPieChart'

function Leaderboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">
        Leaderboard
      </h1>
        <div className='mt-4 py-3'><BarChart/></div>
        <div className='mt-4 py-2'><TaskPieChart/></div>
      <div>
        <LeaderBoardComp/>
      </div>
    </div>
  )
}

export default Leaderboard