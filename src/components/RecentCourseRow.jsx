import {Transition} from '@headlessui/react';
import {CopyIcon, DeleteIcon, EditIcon, MenuBulletsIcon, PrintIcon, viewDetailsIcon} from "../assets/index.js";
import {Fragment, useEffect, useRef, useState} from "react";

const RecentCourseRow = ({CandidateName, Date, LicenseType, AircraftType, StaffName, Exam, RoomIndex, Absence}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuEventList = () => {
        setOpenMenu(!openMenu);
        console.log('open menu clicked')
    };
    return (
        <tr className="mb-2 py-2 bg-white border-b box shadow-[5px_3px_5px_#00000005] rounded-[0.6rem] flex flex-row justify-between">
            {/* Candidate Name */}
            <td className="flex flex-row px-5 py-3 w-64">
                <div className="flex flex-col items-start gap-y-2">
                    <div className="text-[#8FA4BC] text-xs whitespace-nowrap">Candidate Name</div>
                    <div
                        className="text-[#43566D] text-xs font-semibold whitespace-nowrap sm:whitespace-pre-wrap">{CandidateName}</div>
                </div>
            </td>

            {/* Date */}
            <td className="flex flex-row px-5 py-3">
                <div className="flex flex-col items-start gap-y-2">
                    <div className="text-[#8FA4BC] text-xs whitespace-nowrap">Date</div>
                    <div
                        className="text-[#43566D] text-xs font-semibold whitespace-nowrap sm:whitespace-pre-wrap">{Date}</div>
                </div>
            </td>

            {/* License Type */}
            <td className="flex flex-row px-5 py-3">
                <div className="flex flex-col items-start gap-y-2">
                    <div className="text-[#8FA4BC] text-xs whitespace-nowrap">License Type</div>
                    <div
                        className="text-[#43566D] text-xs font-semibold whitespace-nowrap sm:whitespace-pre-wrap">{LicenseType}</div>
                </div>
            </td>

            {/* Aircraft Type */}
            <td className="flex flex-row px-5 py-3 w-44">
                <div className="flex flex-col items-start gap-y-2">
                    <div className="text-[#8FA4BC] text-xs whitespace-nowrap">Aircraft Type</div>
                    <div
                        className="text-[#2A8EB3] text-xs font-semibold whitespace-nowrap sm:whitespace-pre-wrap">{AircraftType}</div>
                </div>
            </td>

            {/* Staff Name */}
            <td className="flex flex-row px-5 py-3 w-36">
                <div className="flex flex-col items-start gap-y-2">
                    <div className="text-[#8FA4BC] text-xs whitespace-nowrap">Staff Name</div>
                    <div
                        className="text-[#43566D] text-xs font-semibold whitespace-nowrap sm:whitespace-pre-wrap">{StaffName}</div>
                </div>
            </td>

            {/* Exam Status */}
            <td className="flex flex-row px-5 py-3">
                <div className="flex flex-col items-start gap-y-2">
                    <div className="text-[#8FA4BC] text-xs whitespace-nowrap">Exam Status</div>
                    <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                            Exam === 'Completed' ? 'bg-[#469CBC]' :
                                Exam === 'Failed' ? 'bg-danger' :
                                    Exam === 'In Progress' ? 'bg-yellow-300' :
                                        Exam === 'Not Started' ? 'bg-amber-900' : ''
                        }`}></div>
                        <div
                            className="text-[#43566D] text-xs font-semibold whitespace-nowrap sm:whitespace-pre-wrap">{Exam}</div>
                    </div>
                </div>
            </td>

            {/* Room Index */}
            <td className="flex flex-row px-5 py-3">
                <div className="flex flex-col items-center gap-y-2">
                    <div className="text-[#8FA4BC] text-xs whitespace-nowrap">Room</div>
                    <div
                        className="text-[#43566D] text-xs font-semibold whitespace-nowrap sm:whitespace-pre-wrap">{RoomIndex}</div>
                </div>
            </td>

            {/* Absence */}
            <td className="flex flex-row px-5 py-3">
                <div className="flex flex-col items-start gap-y-2">
                    <div className="text-[#8FA4BC] text-xs whitespace-nowrap">Absence %</div>
                    <div
                        className="text-[#43566D] text-xs font-semibold whitespace-nowrap sm:whitespace-pre-wrap">{Absence}</div>
                </div>
            </td>

            {/* Menu Icon with Dropdown */}
            <td className="flex flex-row px-5 py-3 cursor-pointer relative my-auto">
                <button onClick={handleMenuEventList} className={`p-1.5`}>
                    <img src={MenuBulletsIcon} alt="Menu Bullets Icon" className="object-contain"/>
                </button>
                <RecentItemMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </td>
        </tr>
    );
};

export default RecentCourseRow;

export const RecentItemMenu = ({ openMenu, setOpenMenu }) => {
    const menuRef = useRef(null);

    const handleMenuItemClick = () => {
        setOpenMenu(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenMenu(false);
        }
    };

    useEffect(() => {
        if (openMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMenu]);

    return (
        <Transition
            as={Fragment}
            show={openMenu}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <div className="absolute z-[10000] top-[100%] right-4" ref={menuRef}>
                <div
                    className="p-2 shadow-[0px_3px_10px_#00000017] bg-white border border-slate-200 rounded-lg w-40">
                    <div
                        className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-lg hover:bg-slate-100 text-xs font-semibold"
                        onClick={handleMenuItemClick}
                    >
                        <img src={viewDetailsIcon} alt="copy icon" className="w-4 h-4 mr-2"/>
                        View Details
                    </div>
                    <div
                        className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-lg hover:bg-slate-100 text-xs font-semibold"
                        onClick={handleMenuItemClick}
                    >
                        <img src={EditIcon} alt="delete icon" className="w-4 h-4 mr-2"/>
                        Edit
                    </div>
                    <div
                        className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-lg hover:bg-slate-100 text-xs font-semibold"
                        onClick={handleMenuItemClick}
                    >
                        <img src={PrintIcon} alt="delete icon" className="w-4 h-4 mr-2"/>
                        Print Invoice
                    </div>
                </div>
            </div>
        </Transition>
    );
};


