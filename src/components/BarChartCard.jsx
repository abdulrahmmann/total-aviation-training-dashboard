import '../index.css';

export const BarChartCard = ({CourseStatus}) => {
    return (
        <div
            className="w-full z-50flex flex-col col-span-12 p-3.5 md:col-span-6 2xl:col-span-3 shadow-sm relative box--chart box--stacked">
            <div className="flex items-center">
                <div
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-[#E7F3F6] border-2 border-[#D2E9F0]">
                    <span className="text-2xl text-[#00A18A] font-BebasNeueBold text-center">{CourseStatus}</span>
                </div>
                <div className="ml-4 text-lg text-[#43566E] font-BebasNeueBold">
                    courses status
                </div>
            </div>
            <div className="relative my-4 overflow-hidden">
                <BarChart/>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
                <div className="flex items-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#5AABC6]"></div>
                    <div className="ml-2.5 text-[14px] font-BebasNeueRegular">
                        course completed
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#8FA4BC]"></div>
                    <div className="ml-2.5 text-[14px] font-BebasNeueRegular">course in progress</div>
                </div>
            </div>
        </div>
    );
};


import {Bar} from 'react-chartjs-2';
import {BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip} from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

import {registerables} from 'chart.js';

Chart.register(...registerables);

export const BarChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [20, 16, 10, 5, 4, 2],
                backgroundColor: '#7bbcd1',
                barThickness: 8,
                barPercentage: 0.9,
                categoryPercentage: 0.8
            },
            {
                label: 'Dataset 2',
                data: [2, 10, 2, 8, 9, 5],
                backgroundColor: '#9aaabd',
                barThickness: 8,
                barPercentage: 0.9,
                categoryPercentage: 0.8
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                display: false,
                ticks: {
                    display: false,
                },
                barPercentage: 1,
                categoryPercentage: 1
            },
            y: {
                display: false,
                ticks: {
                    display: false,
                }
            },
        },
    };

    const horizontalLinePlugin = {
        id: 'horizontalLine',
        beforeDraw: (chart) => {
            const {ctx, chartArea: {left, right}, scales: {y}} = chart;
            const numberOfLines = 6; // Change this value to set the number of lines
            const interval = (y.max - y.min) / (numberOfLines - 1);

            ctx.save();
            ctx.strokeStyle = '#e0e0e0';
            ctx.lineWidth = 1;

            for (let i = 0; i < numberOfLines; i++) {
                const value = y.min + i * interval;
                const yPixel = y.getPixelForValue(value);
                ctx.beginPath();
                ctx.moveTo(left, yPixel);
                ctx.lineTo(right, yPixel);
                ctx.stroke();
            }

            ctx.restore();
        }
    };

    return (
        <div style={{height: '100px'}}>
            <Bar data={data} options={options} plugins={[horizontalLinePlugin]} className={'dsddsdssds'}/>
        </div>
    );
};



