import React from 'react';

const leaderboardData = [
  { id: 1, name: "Alice", points: 1500, status: "Completed 90% of tasks" },
  { id: 2, name: "Bob", points: 1350, status: "Completed 85% of tasks" },
  { id: 3, name: "Charlie", points: 1200, status: "Completed 70% of tasks" },
  { id: 4, name: "David", points: 1000, status: "Completed 65% of tasks" },
  { id: 5, name: "Eve", points: 950, status: "Completed 50% of tasks" },
  // Current User
  { id: 6, name: "You", points: 1100, status: "Completed 75% of tasks" },
];

const Leaderboard = () => {
  // Sort leaderboard data by points in descending order
  const sortedData = leaderboardData.sort((a, b) => b.points - a.points);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 my-6">
        $Global Rank
      </h1>
      {/* Leaderboard Table */}
      <div className="md:w-2/3 md:mx-auto overflow-x-auto bg-white dark:bg-gray-800 p-1 rounded-sm shadow-lg">
        <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
          <thead className="bg-gray-100 dark:bg-gray-950">
            <tr>
              <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Rank</th>
              <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">User</th>
              <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Points</th>
              <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b dark:border-gray-600 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className={`px-6 py-4 ${user.name === "You" ? 'font-bold text-blue-500' : ''}`}>{user.name}</td>
                <td className="px-6 py-4">{user.points}</td>
                <td className="px-6 py-4">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
