import 'react-day-picker/dist/style.css';
import '../index.css';

import {GaugeChartCard} from "./GaugeChartCard.jsx";
import {BarChartCard} from "./BarChartCard.jsx";
import {ChartCardSlider} from "./ChartCardSlider.jsx";
import {LiteDatePicker} from "./LiteDatePicker.jsx";

export default function GeneralReportCards() {
    return (
        <div id={'general-cards'} className="grid grid-cols-12 gap-5 mt-6">
            <ChartCardSlider TotalNumber="27,350"/>

            <BarChartCard CourseStatus={24}/>

            <LiteDatePicker />

            <GaugeChartCard CourseStatus={13}/>
        </div>
    );
}

import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler);
function getGradient(ctx, chartArea) {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(75, 192, 192, 0.3)');
    gradient.addColorStop(0.5, 'rgba(75, 192, 192, 0.05)');
    gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
    return gradient;
}
import { useEffect } from 'react';

export const LineChartCard = () => {

    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Dataset 1',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                    backgroundColor: function(context) {
                        const chart = context.chart;
                        const {ctx, chartArea} = chart;

                        if (!chartArea) {
                            return null;
                        }
                        return getGradient(ctx, chartArea);
                    }
                }, {
                    label: 'Dataset 2',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    borderDash: [5, 5],
                    tension: 0.1
                }]
            },
            options: {
                fill: true,
                responsive: true,
            }
        });

        return () => {
            myChart.destroy();
        };
    }, []);


    return (
        <canvas id="myChart"></canvas>
    );
}



