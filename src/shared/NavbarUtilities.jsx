import {BillIcon, BoxIcon, ExpandIcon, ProfileUserImg} from "../assets/index.js";
import {useState} from "react";
import ActivitySidebar from "../components/ActivitySidebar.jsx";
import {ProfileMenuItems} from "../utils/Constants.js";
import {Link} from "react-router-dom";
export const ProfileMenuList = ({profileMenu}) => {
    return (
        <>
            <div
                className={`absolute z-30 top-[100%] right-0 transition-opacity duration-300 ${profileMenu ? "opacity-100" : "opacity-0 hidden"}`}>
                <div
                    className="p-2 shadow-[0px_3px_10px_#00000017] bg-white border border-slate-200 rounded-lg w-56 mt-1">
                    {ProfileMenuItems.map((item, index) => (
                        <div key={item.Id}>
                            <Link to={`${item.link}`}
                                  className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-lg text-slate-700 font-medium hover:bg-slate-100">
                                <img src={item.icon} alt={`item image ${index}`} className={`w-4 h-4 mr-2`}/>
                                {item.name}
                            </Link>
                            {(index === 0 || index === 3) && (
                                <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400" role="none"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const NavbarUtilities = () => {
    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    const [profileMenu, setProfileMenu] = useState(false);
    const [activitySidebar, setActivitySidebar] = useState(false);
    const [notificationSidebar, setNotificationSidebar] = useState(false);
    const handleProfileMenu = () => {
        setProfileMenu(prev => !prev)
    }
    const handleActivitySidebar = () => {
        setActivitySidebar(prev => !prev)
    }
    const handleNotificationSidebar = () => {
        setNotificationSidebar(prev => !prev)
    }


    return (
        <div className={`flex items-center gap-1 ml-auto xl:ml-0`}>
            <button onClick={handleActivitySidebar} className={`p-2 text-white rounded-full hover:bg-white/5`}>
                <img src={BoxIcon} alt={'box icon'} className={`w-[18px] h-[18px] cursor-pointer`}/>
            </button>
            {
                activitySidebar && <ActivitySidebar/>
            }
            <button onClick={handleFullscreen} className={`p-2 text-white rounded-full hover:bg-white/5`}>
                <img src={ExpandIcon} alt={'expand icon'} className={`w-[18px] h-[18px] cursor-pointer`}/>
            </button>

            <button className={`p-2 text-white rounded-full hover:bg-white/5`} onClick={handleNotificationSidebar}>
                <img src={BillIcon} alt={'bill icon'} className={`w-[18px] h-[18px] cursor-pointer`}/>
            </button>
            {
                notificationSidebar && <ActivitySidebar/>
            }

            <div className={`relative ml-5`}>
                <button className={``} onClick={handleProfileMenu}>
                    <img src={ProfileUserImg} alt={'rounded img'}
                         className={`w-8 h-8 rounded-full cursor-pointer border-2 border-[#344f81]`}/>
                </button>

                <ProfileMenuList profileMenu={profileMenu}/>
            </div>
        </div>);
};

export default NavbarUtilities;