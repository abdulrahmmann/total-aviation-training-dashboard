import {AddNewScheduleIcon} from "../assets/index.js";

export default function AddNewSchedule() {
    return <button
        className="transition duration-200 shadow-sm inline-flex items-center justify-center py-2 px-3 hover:bg-white/[0.15] rounded-md font-medium cursor-pointer outline-none  disabled:opacity-70 disabled:cursor-not-allowed bg-white/[0.1] text-white">
        <img src={AddNewScheduleIcon} alt={'Add New Schedule Icon'} className={`object-contain mr-3`} />
        Add New Schedule
    </button>;
}