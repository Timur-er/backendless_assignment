import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler,
} from "chart.js";
import {Bar, Line, Doughnut, Pie, Radar} from "react-chartjs-2";
import {useSelector} from "react-redux";
import {getChartData} from "../../store/ChartData/selectors";
import {getChartType} from "../../store/ChartStyle/selectors";

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler)

const Chart = () => {
    const chartData = useSelector(getChartData);
    const chartType = useSelector(getChartType);
    const labels = chartData.xAxis.split(',');
    const yAxis = chartData.yAxis.split(',');


    const data = {
        labels: labels,
        datasets: [{
            label: 'Dataset',
            data: yAxis,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            tension: 0.1
        }]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                backgroundColor: '#fff',
                titleColor: "#000",
                bodyColor: "#000",
            },
            title: {
                display: true,
                text: 'Backendless test assignment',
            },
        },
    };

    const setChart = () => {
        switch (chartType) {
            case 'bar':
                return <Bar data={data} options={options} height={400} type={"bar"}/>
            case 'line':
                return <Line type={"line"} data={data} options={options} height={400}/>
            case 'doughnut':
                return <Doughnut type={'doughnut'} data={data} options={options} height={400}/>
            case 'pie':
                return <Pie type={"pie"} data={data} options={options} height={400}/>
            case 'radar':
                return <Radar type={"radar"} data={data} options={options} height={400}/>
            default:
                return <Bar data={data} options={options} height={400} type={"bar"}/>
        }
    }

    return (

        <div>
            {setChart()}
        </div>
    );
};

export default Chart;