import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// chart element registration
ChartJS.register(ArcElement, Tooltip, Legend);

const TaskPieChart = ({info=[],label,value}) => {
  // Sample task data for current user
  if(info.length==0) return;
  const taskData = {
    completed: 15,
    pending: 5,
    overdue: 3,
  };

  // Doughnut chart data sample
  const doughnutData = {
    labels: Array.isArray(info) && info.map((item)=>item[label]),
    datasets: [
      {
        data: Array.isArray(info) && info.map((item)=>item[value]),
        backgroundColor: ['#34D399', '#FBBF24', '#F87171'],
        borderColor: ['#34D399', '#FBBF24', '#F87171'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
        Current Status
      </h2>
      <div className="max-w-xs mx-auto">
        <Doughnut data={doughnutData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default TaskPieChart;
