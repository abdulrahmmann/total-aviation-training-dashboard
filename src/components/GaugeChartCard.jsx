import {AirplaneDesignImg} from "../assets/index.js";
import {ArcElement, Chart, Legend, Tooltip} from "chart.js";
import {Doughnut} from "react-chartjs-2";

export const GaugeChartCard = ({CourseStatus}) => {
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
                <GaugeChart/>
                <img src={AirplaneDesignImg} alt={'Airplane GaugeChart Img'}
                     className={`absolute left-[50%] -translate-x-[50%] bottom-0`}/>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
                <div className="flex items-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#DB5259]"></div>
                    <div className="ml-2.5 text-[14px] font-BebasNeueRegular">
                        course in progress
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#5AABC6]"></div>
                    <div className="ml-2.5 text-[14px] font-BebasNeueRegular">course completed</div>
                </div>
            </div>
        </div>
    );
};


Chart.register(ArcElement, Tooltip, Legend);
export const GaugeChart = () => {
    const data = {
        labels: ['Course Completed', 'Course in Progress'],
        datasets: [
            {
                data: [30, 70],
                backgroundColor: ['#D57777', '#6C7CA1'],
                borderWidth: 0.8,
                borderColor: ['#CC5C5C', '#3A3E6F'],
                hoverBackgroundColor: ['#DB5259', '#5AABC6'],
                hoverBorderColor: ['#DB5259', '#5AABC6'],
                cutout: '88%',
                rotation: -90,
                circumference: 180,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        rotation: -90,
        circumference: 180,
        cutout: '80%',
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    },
                },
            },
            legend: {
                display: false,
            },
        },
    };

    return (
        <div style={{height: '100px', position: 'relative'}}>
            <Doughnut data={data} options={options}/>
        </div>
    );
};
