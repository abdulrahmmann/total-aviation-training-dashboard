import { useEffect, useRef } from 'react';
import { CalendarIcon1, CalendarIcon2 } from "../assets/index.js";
import '../index.css';
import { Litepicker } from 'litepicker';
function GeneralReport() {
    const pickerRef = useRef(null);

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

    return (
        <div className={`flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row justify-between`}>
            <div className={`text-sm font-bold text-white`}>General Report</div>

            <div className={`flex flex-col sm:flex-row gap-x-3 gap-y-2 xl:ml-auto`}>
                <div
                    className={`relative bg-white/[0.1] border-transparent border flex items-center py-3 sm:py-2 px-3.5 rounded-[0.5rem] text-[#C5D0DF] cursor-pointer hover:bg-white/[0.15]`}>
                    <img src={CalendarIcon1} alt="custom date icon"
                         className={`w-4.5 h-4.5`} />
                    <select
                        className={`outline-none bg-transparent w-full text-xs border-slate-300/60 shadow-sm text-[#C5D0DF] ml-1`}>
                        <option value="custom-date">Custom Date</option>
                        <option value="daily">Daily</option>
                        <option value="weakly">Weakly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
                <div
                    className={`picker relative w-full xl:w-[250px] bg-white/[0.1] border-transparent border flex items-center py-3 sm:py-2 px-3.5 rounded-[0.5rem] text-white/60 cursor-pointer hover:bg-white/[0.15]`}
                    onClick={() => {
                        pickerRef.current?.click();
                    }}
                >
                    <img src={CalendarIcon2} alt="calendar icon" className={`w-4.5 h-4.5`} />
                    <input
                        type="text"
                        ref={pickerRef}
                        className={`text-[#C5D0DF] text-xs w-full bg-transparent outline-none border-none cursor-text ml-2`}
                        readOnly // Prevent direct editing
                    />
                </div>
            </div>
        </div>
    );
}

export default GeneralReport;
