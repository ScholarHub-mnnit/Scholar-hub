import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const leaderboardData = [
    { id: 1, name: 'Alice', points: 1500 },
    { id: 2, name: 'Bob', points: 1350 },
    { id: 3, name: 'Charlie', points: 1200 },
    { id: 4, name: 'David', points: 1000 },
    { id: 5, name: 'Eve', points: 950 },
    { id: 6, name: 'You', points: 1100 }, // Current user
  ];

const barChartData = {
    labels: leaderboardData.map(user => user.name),
    datasets: [
      {
        label: 'Points',
        data: leaderboardData.map(user => user.points),
        backgroundColor: leaderboardData.map(user => (user.name === 'You' ? '#3b82f6' : '#6b7280')),
        borderColor: leaderboardData.map(user => (user.name === 'You' ? '#2563eb' : '#4b5563')),
        borderWidth: 1,
      },
    ],
  };
  //sample data for barchart for overall performance

const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    //edit later
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
    //   title: {
    //     display: true,
    //     text: 'Leaderboard - Performance Comparison',
    //     font: {
    //       size: 8,
    //     },
    //   },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} points`;
          },
        },
      },
    },
  };
  

function BarChart() {
  return (
    <div className='w-full'>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">Performance Comparison</h2>
        <div className="max-w-3xl mx-auto">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
  )
}

export default BarChart