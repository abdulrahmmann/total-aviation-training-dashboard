import '../index.css';
import {
    BlackCalender1,
    BlackCalender2,
} from "../assets/index.js";
import SidebarMenu from "../components/SidebarMenu.jsx";
import { useEffect, useRef, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import Navbar from "../shared/Navbar.jsx";
import GeneralReport from "../components/GeneralReport.jsx";
import InsightsCardsSlider from "../components/InsightsCardsSlider.jsx";
import { Litepicker } from "litepicker";
import RecentCourses from "../components/RecentCourses.jsx";
import BasicCoursesCardsSlider from "../components/BasicCoursesCardsSlider.jsx";
import DangerousCoursesCardsSlider from "../components/DangerousCoursesCardsSlider.jsx";
import MaintenanceCoursesCardsSlider from "../components/MaintenanceCoursesCardsSlider.jsx";
import AircraftHandlingCoursesCardsSlider from "../components/AircraftHandlingCoursesCardsSlider.jsx";
import SafetyCoursesCardsSlider from "../components/SafetyCoursesCardsSlider.jsx";
import GeneralReportCards from "../components/GeneralReportCards.jsx";


const Analytics = () => {
    const [pinMenu, setPinMenu] = useState(false);
    const pickerRef = useRef(null);
    const [activeCourse, setActiveCourse] = useState(null);

    useEffect(() => {
        if (pickerRef.current) {
            new Litepicker({
                element: pickerRef.current,
                format: 'YYYY-MM-DD',
                singleMode: false,
                numberOfMonths: 2,
                numberOfColumns: 2,
                autoApply: false,
                footerHTML: '<span class="preview-date-range"></span> <button type="button" class="button-cancel">Cancel</button> <button class="button-apply">Apply</button>',
                showTooltip: true,
                showWeekNumbers: true,
                dropdowns: {
                    minYear: 1990,
                    maxYear: 2024,
                    months: true,
                    years: "asc"
                },
            });
        }
    }, []);

    const handleCardClick = (title) => {
        switch (title) {
            case 'Basic Courses':
                setActiveCourse(<BasicCoursesCardsSlider />);
                break;
            case 'Maintenance':
                setActiveCourse(<MaintenanceCoursesCardsSlider />);
                break;
            case 'Dangerous goods regulations':
                setActiveCourse(<DangerousCoursesCardsSlider />);
                break;
            case 'Aircraft handling':
                setActiveCourse(<AircraftHandlingCoursesCardsSlider />);
                break;
            case 'Safety':
                setActiveCourse(<SafetyCoursesCardsSlider />);
                break;
            default:
                setActiveCourse(null);
        }
    };

    return (
        <section id="dashboard-analytics-page">
            <DashboardLayout>
                <div>
                    {/* Start - Menu List */}
                    <SidebarMenu pinMenu={pinMenu} setPinMenu={setPinMenu} />
                    {/* End - Menu List */}

                    {/* Start - Navbar - Header */}
                    <Navbar pinMenu={pinMenu} />
                    {/* End - Navbar - Header */}

                    {/* Dashboard - Analytics */}
                    <div className={`transition-[margin,width] duration-100 xl:pl-3.5 pt-8 pb-16 relative z-10 xl:ml-[91px] ${pinMenu? 'left-[70px]': ''}`}>
                        <div className={`px-1 xl:px-[100px] mt-10`}>
                            <div className={`xl:container px-3 xl:px-0 mx-auto`}>
                                {/* General Report */}
                                <GeneralReport />
                                {/* General Report - Chart Cards */}
                                <GeneralReportCards />

                                <div>
                                    <div className="mt-10 relative">
                                        {!activeCourse && <InsightsCardsSlider onCardClick={handleCardClick} />}
                                        {activeCourse}
                                    </div>
                                </div>

                                <div>
                                    {/* Recent Course Header */}
                                    <div className={`flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row`}>
                                        <div className={`text-sm font-bold`}>Recent Course Examination</div>
                                        <div className={`flex flex-col sm:flex-row gap-x-3 gap-y-2 ml-0 sm:ml-auto`}>
                                            <div className={`relative bg-white border-transparent border flex items-center py-3 sm:py-2 px-3.5 rounded-[0.5rem] text-slate-700 cursor-pointer`}>
                                                <img src={BlackCalender1} alt="custom date icon" className={`w-4.5 h-4.5`} />
                                                <select className={`outline-none bg-transparent w-full text-xs border-slate-300/60 shadow-sm text-[#334155] ml-1`}>
                                                    <option value="custom-date">Custom Date</option>
                                                    <option value="daily">Daily</option>
                                                    <option value="weekly">Weekly</option>
                                                    <option value="monthly">Monthly</option>
                                                    <option value="yearly">Yearly</option>
                                                </select>
                                            </div>
                                            <div className={`picker relative w-full sm:w-[250px] bg-white border-transparent border flex items-center py-3 sm:py-2 px-3.5 rounded-[0.5rem] text-[#43566D] cursor-pointer`} onClick={() => { pickerRef.current?.click(); }}>
                                                <img src={BlackCalender2} alt="calendar icon" className={`w-4.5 h-4.5`} />
                                                <input type="text" ref={pickerRef} className={`text-[#43566D] bg-white border-none shadow-sm outline-none ml-2 text-xs w-full`} readOnly />
                                            </div>
                                        </div>
                                    </div>

                                    <RecentCourses />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </section>
    );
};

export default Analytics;
