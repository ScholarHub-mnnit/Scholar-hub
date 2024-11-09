import React from 'react';

// Sample data for achievements based on academic activities
const achievements = [
  { id: 1, name: "Perfect Assignment", category: "Assignment", points: 100, status: "Earned", description: "Earned for submitting all assignments on time." },
  { id: 2, name: "Project Master", category: "Project", points: 200, status: "In Progress", description: "Earned for completing projects with excellent quality." },
  { id: 3, name: "Event Attendee", category: "Event", points: 50, status: "Earned", description: "Earned for attending 5 academic events." },
  { id: 4, name: "Lecture Expert", category: "Lecture", points: 30, status: "In Progress", description: "Earned for attending all lectures in a semester." },
  { id: 5, name: "Group Project Leader", category: "Project", points: 150, status: "Not Started", description: "Earned for leading a group project to completion." },
  { id: 6, name: "Quiz Champion", category: "Assignment", points: 70, status: "Earned", description: "Earned for scoring above 90% on quizzes." },
];

const Achievement = () => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 p-1 rounded-sm shadow-lg">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
        <thead className="bg-gray-100 dark:bg-gray-950">
          <tr>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Achievement</th>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Category</th>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Points</th>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Status</th>
            <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Description</th>
          </tr>
        </thead>
        <tbody>
          {achievements.map((achievement, index) => (
            <tr
              key={achievement.id}
              className={`border-b dark:border-gray-600 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
            >
              <td className="px-6 py-4">{achievement.name}</td>
              <td className="px-6 py-4">{achievement.category}</td>
              <td className="px-6 py-4">{achievement.points}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    achievement.status === 'Earned' ? 'bg-green-500 text-white' :
                    achievement.status === 'In Progress' ? 'bg-yellow-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}
                >
                  {achievement.status}
                </span>
              </td>
              <td className="px-6 py-4">{achievement.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Achievement;
