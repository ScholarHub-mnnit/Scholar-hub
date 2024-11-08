import React from 'react';

const rewards = [
    { id: 1, name: "Pro", category: "Assignment", points: 100, status: "Available", description: "Redeemable after submitting 5 assignments." },
    { id: 2, name: "Brilliant", category: "Project", points: 200, status: "Redeemed", description: "Bonus marks for project excellence." },
    { id: 3, name: "Excellence", category: "Event", points: 150, status: "Available", description: "Redeemable after attending an academic event." },
    { id: 4, name: "Consistent", category: "Lecture", points: 50, status: "Available", description: "Access to exclusive lecture notes after completing a quiz." },
    { id: 5, name: "Punctual", category: "Event", points: 300, status: "Redeemed", description: "Awarded after attending 3 or more events." },
    { id: 6, name: "Persevered", category: "Assignment", points: 250, status: "Available", description: "Get a free lunch for completing all assignments in a month." },
  ];

const Reward = () => {
    return (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 p-1 rounded-sm shadow-lg">
          <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Reward</th>
                <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Category</th>
                <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Points Required</th>
                <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Status</th>
                <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Description</th>
              </tr>
            </thead>
            <tbody>
              {rewards.map((reward, index) => (
                <tr
                  key={reward.id}
                  className={`border-b dark:border-gray-600 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                >
                  <td className="px-6 py-4">{reward.name}</td>
                  <td className="px-6 py-4">{reward.category}</td>
                  <td className="px-6 py-4">{reward.points}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        reward.status === 'Available' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                      }`}
                    >
                      {reward.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{reward.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default Reward