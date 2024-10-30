import React from 'react'
import { MdOutlineAssignmentTurnedIn, MdLeaderboard, MdStars  } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { AiFillSchedule } from "react-icons/ai";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiAchievement, GiStairsGoal } from "react-icons/gi";



function Dashboard() {
  return (
    <div className=' w-full py-2'>
    <div className='flex px-4'>
      <aside className='mx-2 border border-gray-400 rounded-md dark:border-gray-700 bg-blue-400 dark:bg-gray-950'>
      <div className="buttons py-2 px-2 text-white dark:text-gray-400 pt-4">
                  <ul className='flex flex-col  gap-2 justify-start'>
                    <li className='cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md flex items-center sm:hidden'><MdLeaderboard  className='mr-2'  />Leaderboard</li>
                    <li className='cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md flex items-center sm:hidden'><AiFillSchedule className='mr-2' />Schedule</li>
                    <li className='cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md flex items-center'><SiBookstack className='mr-2'/>Courses</li>
                    <li className='cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md flex items-center'><MdOutlineAssignmentTurnedIn className='mr-2' />Assignments</li>
                    <li className='cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md flex items-center '><PiChalkboardTeacherDuotone className='mr-2' />Lectures</li>
                    <li className='cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md flex items-center '><BsPersonWorkspace className='mr-2' />Projects</li>
                    <li className='cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md flex items-center '><GiAchievement className='mr-2' />Achievements</li>
                    <li className='cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md flex items-center sm:hidden'><GiStairsGoal className='mr-2' />Goals</li>
                    <li className='cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md flex items-center sm:hidden'><MdStars className='mr-2'/>Rewards</li>
                  </ul>
                </div>
      </aside>
      <div className='w-full bg-red-300 rounded-md'>
        World
      </div>
    </div>
    </div>
  )
}

export default Dashboard