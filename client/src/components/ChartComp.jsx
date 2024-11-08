import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({info=[],label,value}) => {
    
    // '#d45087','#00BFFF',
    const data = {
        labels: Array.isArray(info) && info?.map(item=>item[label]),
        datasets: [
            {   
                label:value,
                data: Array.isArray(info) && info?.map(item=>item[value]),
                backgroundColor: [
                    '#FF6F61',
                    '#6BB9FF',
                    '#68D391',
                    '#F6E05E',
                    '#FF6B6B',
                    '#9B59B6',
                    '#5DADE2',
                    '#FFA07A',
                    '#1ABC9C',
                    '#E8DAEF',
                ],
                borderColor: [
                    '#FF9A9A',
                    '#AEEEEE',
                    '#B2F5B2',
                    '#F6EB61',
                    '#FFB3B3',
                    '#D8BFD8',
                    '#4682B4',
                    '#FF4500',
                    '#008080',
                    '#FF9999',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="max-w-md mx-auto">
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
