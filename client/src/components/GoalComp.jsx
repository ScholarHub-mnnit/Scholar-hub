import React from 'react';

const goals = [
  { id: 1, title: "Complete homework", date: "2024-11-08", completed: false },
  { id: 2, title: "Attend meeting", date: "2024-11-08", completed: true },
  { id: 3, title: "Prepare for presentation", date: "2024-11-09", completed: false },
  { id: 4, title: "Review notes", date: "2024-11-10", completed: false },
  { id: 5, title: "Gym session", date: "2024-11-15", completed: false },
];// raw data for current layout

const Goal = () => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 p-1 rounded-sm shadow-lg">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
        <thead className="bg-gray-100 dark:bg-gray-950">
          <tr>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Goal</th>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Date</th>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Status</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal, index) => (
            <tr
              key={goal.id}
              className={`border-b dark:border-gray-600 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
            >
              <td className="px-6 py-4">{goal.title}</td>
              <td className="px-6 py-4">{goal.date}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    goal.completed ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                  }`}
                >
                  {goal.completed ? 'Completed' : 'Pending'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Goal;
