import React from 'react';
import useGoals from '../Data/goals';
import { BiReset } from "react-icons/bi";


const Goal = () => {
  const goals=useGoals();
  const resetGoal=(id)=>{

  }
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 p-1 rounded-sm shadow-lg">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
        <thead className="bg-gray-100 dark:bg-gray-950">
          <tr>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Title</th>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Goal</th>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Status</th>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Edit</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal, index) => (
            <tr
              key={goal._id+index}
              className={`border-b dark:border-gray-600 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
            >
              <td className="px-6 py-4">{goal.title}</td>
              <td className="px-6 py-4">{goal.goaltype}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full 
        ${goal["status"]==='Pending' && "bg-yellow-500 "} 
        ${goal["status"]==='Completed' && "bg-green-500"} 
        ${goal["status"]==="OverDue" && "bg-red-500"} `}
                >
                  {goal["status"]}
                </span>
              </td>
              <td className='px-6 py-4'>
              <button
                        className="dark:bg-gray-950 w-8 h-8 text-center rounded-lg text-sm border border-black/10 bg-gray-50 dark:hover:text-black hover:bg-gray-100 shrink-0"
                        onClick={() => resetGoal(goal._id)}
                    >
                        <BiReset className='w-full text-2xl' />
                    </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Goal;
