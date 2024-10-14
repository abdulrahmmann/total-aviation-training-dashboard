import PopupSettingMenu from "../shared/PopupSettingMenu.jsx";
import '../index.css';
import {useEffect, useState} from "react";

const DashboardLayout = ({children}) => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`${!isSticky? 'bg-nav-overlay bg-gradient-to-b from-slate-200/70 to-slate-50 relative min-h-screen before:content-[\'\'] before:absolute before:h-[376px] before:w-screen before:bg-gradient-to-b before:from-[#02286F] before:to-[#419ABB]' :  'bg-[#eef2f6]'}`}
        >
            <div className={`${!isSticky? 'bg-overlay-airplane': ''}`}></div>
            {children}
            <PopupSettingMenu bgColor={'#1588AF'}/>
        </div>

    );
};

export default DashboardLayout;