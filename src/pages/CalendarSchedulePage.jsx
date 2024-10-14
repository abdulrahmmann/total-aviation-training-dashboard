import SidebarMenu from "../components/SidebarMenu.jsx";
import Navbar from "../shared/Navbar.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import {Fragment, useState} from "react";
import AddNewSchedule from "../components/AddNewSchedule.jsx";
import {CopyIcon, DeleteIcon, MenuBulletsIcon, Send} from "../assets/index.js";
import FullCalendarComponent from "../components/FullCalendar.jsx";
import {UpcomingItems} from "../utils/Constants.js";
import {Transition} from '@headlessui/react';

export const CalendarSchedulePage = () => {
    const [pinMenu, setPinMenu] = useState(false);

    const [upcomingActive, setUpcomingActive] = useState('Upcoming');

    return (
        <section id={'calendar-schedule'}>
            <DashboardLayout>
                <div>
                    {/* Start - Menu List */}
                    <SidebarMenu pinMenu={pinMenu} setPinMenu={setPinMenu}/>
                    {/* End - Menu List */}

                    {/* Start - Navbar - Header */}
                    <Navbar pinMenu={pinMenu}/>
                    {/* End - Navbar - Header */}

                    <div
                        className={`transition-[margin,width] duration-100 xl:pl-3.5 pt-8 pb-16 relative z-10 xl:ml-[91px] ${pinMenu ? 'left-[70px]' : ''}`}>
                        <div className={`px-1 xl:px-[100px] mt-10`}>
                            <div className={`xl:container px-3 xl:px-0 mx-auto`}>

                                <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                                    <div className="text-base font-medium text-white">Calendar</div>
                                    <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
                                        <AddNewSchedule/>
                                    </div>
                                </div>

                                <div className={`mt-3.5 flex flex-col lg:flex-row gap-y-10 gap-x-6`}>
                                    <div className={`w-full lg:w-[23rem] flex-none`}>
                                        <div className={`flex flex-col gap-y-7`}>
                                            <div className={`flex flex-col p-2 box box--stacked`}>
                                                <ul className={`p-0.5 border rounded-lg w-full flex bg-transparent border-transparent`}>

                                                    <li className="focus-visible:outline-none flex-1 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem]">
                                                        <button
                                                            className={`cursor-pointer  px-3 transition-colors font-medium font-GothamMedium w-full whitespace-nowrap rounded-[0.6rem] py-3 flex items-center gap-2 justify-center ${upcomingActive === 'Upcoming' ? 'bg-[#F6FAFB] border border-[#E0E8F1] shadow-sm text-[#529EB8]' : 'text-[#93979A]'}`}
                                                            onClick={() => setUpcomingActive('Upcoming')}>
                                                            <img src={Send} alt={'send img'}/>
                                                            Upcoming
                                                            <div
                                                                className="min-w-[1.15rem] rounded-full flex items-center justify-center text-xs bg-[#529EB8] border-[1px] border-[#6594A6]">
                                                                <div
                                                                    className="w-full h-full px-[6px] py-[2px] leading-none rounded-full text-white">12
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </li>

                                                    <li className="focus-visible:outline-none flex-1 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem]">
                                                        <button
                                                            className={`cursor-pointer px-3 transition-colors font-medium font-GothamMedium w-full whitespace-nowrap rounded-[0.6rem] py-3 flex items-center gap-2 justify-center ${upcomingActive === 'Invite' ? 'bg-[#F6FAFB] border border-[#E0E8F1] shadow-sm text-[#529EB8]' : 'text-[#93979A]'}`}
                                                            onClick={() => setUpcomingActive('Invite')}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                 height="24" viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" strokeWidth="2"
                                                                 strokeLinecap="round" strokeLinejoin="round"
                                                                 className="lucide lucide-user-plus w-4 h-4 stroke-[1.4]">
                                                                <path
                                                                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                                <circle cx="9" cy="7" r="4"></circle>
                                                                <line x1="19" x2="19" y1="8" y2="14"></line>
                                                                <line x1="22" x2="16" y1="11" y2="11"></line>
                                                            </svg>
                                                            Invite
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>

                                            {
                                                upcomingActive === 'Upcoming' ? (
                                                    <div className={`h-[580px]`}>
                                                        <UpcomingItemEvents/>
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                    // <div className={`h-[580px]`}>
                                                    //     <UpcomingInvites/>
                                                    // </div>
                                                )
                                            }

                                        </div>
                                    </div>

                                    <div className={`flex flex-col w-full gap-y-7`}>
                                        <div className={`flex flex-col p-5 box box--stacked`}>
                                            <FullCalendarComponent/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </section>
    );
};


export const UpcomingItemEvents = () => {
    const [openMenuId, setOpenMenuId] = useState(null);

    const handleMenuEventList = (id) => {
        if (openMenuId === id) {
            setOpenMenuId(null);
        } else {
            setOpenMenuId(id);
        }
    };

    return (
        <div className={`events`}>
            {UpcomingItems.length > 0 ? (
                UpcomingItems.map((item) => (
                    <div key={item.id}
                         className="event relative flex items-center gap-3.5 p-5 cursor-move event box box--stacked">
                        <div>
                            <div
                                className="w-[4.5rem] h-[4.5rem] overflow-hidden rounded-2xl image-fit border-[3px] border-slate-200/70">
                                <img src={item.image} alt={item.title}/>
                            </div>
                        </div>
                        <div>
                            <div
                                className="font-medium text-primary max-w-[7rem] md:max-w-[12rem] truncate event__title">{item.title}</div>
                            <div
                                className="mt-1 leading-relaxed text-[#93979A] max-w-[7rem] md:max-w-[12rem] truncate">{item.description}</div>
                            <div className="mt-1 text-[#93979A]">
                                <span className="event__days">{item.days}</span> Days
                                <span className="mx-1">•</span> {item.time}
                            </div>
                        </div>
                        <div
                            className="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-5 group-[.right]:-ml-8 group-[.right]:left-0">
                            <button
                                className="cursor-pointer w-5 h-5 text-slate-500"
                                onClick={() => handleMenuEventList(item.id)}
                            >
                                <img src={MenuBulletsIcon} alt="Menu Icon"/>
                            </button>
                            <UpcomingItemEventMenu menuList={openMenuId === item.id}/>
                        </div>
                    </div>
                ))
            ) : (
                <div className="p-3 text-center text-slate-950">
                    No events yet
                </div>
            )}
        </div>
    );
};


export const UpcomingItemEventMenu = ({menuList}) => {
    return (
        <Transition
            as={Fragment}
            show={menuList}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <div className="absolute z-[10000] top-[120%] right-4">
                <div
                    className="p-2 shadow-[0px_3px_10px_#00000017] bg-white border border-slate-200 rounded-lg w-40">
                    <div
                        className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-lg hover:bg-slate-100">
                        <img src={CopyIcon} alt="copy icon" className="w-4 h-4 mr-2"/>
                        Copy Link
                    </div>
                    <div
                        className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-lg hover:bg-slate-100">
                        <img src={DeleteIcon} alt="delete icon" className="w-4 h-4 mr-2"/>
                        Delete
                    </div>
                </div>
            </div>
        </Transition>
    );
};
