
import { useEffect, useRef } from 'react';
import Litepicker from 'litepicker';
import {useNavigate} from "react-router-dom";


export const LiteDatePicker = () => {
    const pickerRef = useRef(null);

    useEffect(() => {
        const picker = new Litepicker({
            element: pickerRef.current,
            singleMode: true,
            autoApply: true,
            inlineMode: true,
            footerHTML: false,
            showTooltip: false,
            showDaysOfOtherMonths: true,
        });

        return () => {
            picker.destroy();
        };
    }, []);

    const navigate = useNavigate();

    const handleNavigationToCalenderSchedule = () => {
        navigate('/calendar-schedule');
    }

    return <div className={'general-lite-calendar box--picker--stacked h-[225px] col-span-12 md:col-span-6 2xl:col-span-3 shadow-sm relative'} ref={pickerRef}
                onClick={handleNavigationToCalenderSchedule} />;
};
