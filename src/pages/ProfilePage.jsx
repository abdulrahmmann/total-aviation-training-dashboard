import DashboardLayout from "../layout/DashboardLayout.jsx";
import SidebarMenu from "../components/SidebarMenu.jsx";
import Navbar from "../shared/Navbar.jsx";
import {useState} from "react";
import '../index.css';

import {useEffect, useRef} from 'react';
import Litepicker from 'litepicker';

import FlagsSelect from 'react-flags-select';

import {
    GlobalWorldIcon,
    InfoIcon,
    ProfileUserImg,
    ReturnBackIcon, UploadAttachedIcon, UploadPicture,
} from "../assets/index.js";
import SettingsMenu from "../components/SettingsMenu.jsx";

function ProfileCover() {
    return <div className={`p-1.5 box flex flex-col box--stacked`}>
        <div className={`h-60 relative w-full rounded-[0.6rem] profile-cover-img`}>
            <div className={`absolute inset-x-0 top-0 w-32 h-32 mx-auto mt-36`}>
                <div
                    className={`w-full h-full overflow-hidden border-[5px] border-white/70 rounded-full image-fit`}
                    style={{borderRadius: "50%"}}>
                    <img src={ProfileUserImg}
                         alt={"Total - Admin Dashboard Image Profile rounded-full"}
                         style={{borderRadius: "50%"}}/>

                    <div
                        className="absolute bottom-0 right-0 w-5 h-5 mb-2.5 mr-2.5 border-2 border-white rounded-full bg-success"></div>
                </div>
            </div>
        </div>

        <div
            className={`p-5 flex flex-col sm:flex-row gap-y-3 sm:items-end rounded-[0.6rem] bg-slate-50 pt-12`}>
            <div>
                <label className={`mb-2 flex items-center text-slate-500`}>
                    Who can see your profile photo?
                    <img src={InfoIcon} alt={"Info Icon"}
                         className={`cursor-pointer ml-1.5 object-contain`}/>
                </label>
                <div className={`relative mt-2.5`}>
                    <img src={GlobalWorldIcon} alt={"GlobalWorldIcon"}
                         className={`object-contain absolute top-[50%] -translate-y-[50%] ml-3`}/>
                    <select
                        className={`outline-none bg-[length:20px_auto] disabled:bg-slate-100 disabled:cursor-not-allowed transition duration-200 ease-in-out w-full text-sm border-slate-300/60 shadow-sm py-2 px-3 pr-8 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary focus:border-opacity-40 sm:w-44 mr-3 rounded-[0.5rem] pl-9`}>
                        <option value="custom-date">Anyone</option>
                        <option value="daily">Only you</option>
                    </select>
                </div>
            </div>
            <button
                className={`transition duration-200 ml-auto shadow-sm inline-flex items-center justify-center gap-2 border-[1.8px] border-[#6295A6] text-[#6295A6] font-GothamMedium py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-secondary hover:bg-[#6295A6]/[0.1] focus:ring-opacity-20 focus-visible:outline-none`}>
                <img src={UploadPicture} alt={"UploadPicture"}
                     className={`object-contain`}/>
                Upload Cover
            </button>
        </div>
    </div>;
}

function ProfileInfoFullName() {
    return <div className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">Full Name</div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    Enter your full legal name as it appears on your official identification.
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row">
                <input
                    type="text"
                    placeholder="John"
                    className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-r-none transition"
                />
                <input
                    type="text"
                    placeholder="Legend"
                    className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-l-none transition"
                />

            </div>


        </div>
    </div>;
}

function ProfileInfoIdPassport() {
    return <div
        className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label
            className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">ID / Passport
                    </div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    This information is required to verify the national or
                    passport Number ID
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row">
                <input
                    type="text"
                    placeholder="Number ID / Passport"
                    className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-r-none transition"
                />
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Attached ID / Passport"
                        className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#3284A6] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-l-none transition pr-10" // Added pr-10 for padding right to make space for the image
                    />
                    <img
                        src={UploadAttachedIcon}
                        alt="UploadAttachedIcon"
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 max-w-full cursor-pointer`}
                    />
                </div>

            </div>


        </div>
    </div>;
}

function ProfileInfoBirthDate() {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            new Litepicker({
                element: inputRef.current,
                singleMode: true,
                format: 'MM / DD / YYYY',
                autoApply: false,
                showTooltip: true,
                footerHTML: '<span class="preview-date-range"></span> <button type="button" class="button-cancel">Cancel</button> <button class="button-apply">Apply</button>',
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
    return <div className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">Date of Birth</div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    This information is required to verify your age and provide age-appropriate services.
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row">
                <input
                    type="text"
                    placeholder="05 / 01 / 1980"
                    ref={inputRef}
                    className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed transition"
                />
            </div>
        </div>
    </div>;
}

function ProfileInfoGender() {
    return <div className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">Gender</div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    Select your gender from the options.
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row">
                <div
                    className={`w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] rounded-r-none transition`}>
                    <div className={`flex items-center`}>
                        <input id={'checkbox-radio-1'} type={'radio'} name={'gender'}
                               className={`transition-all duration-100 ease-in-out shadow-sm border-slate-300/80 cursor-pointer rounded-full border-2 border-[#D5DDE7] checked:bg-[#3284A6]`}
                               style={{borderWidth: '3px', borderColor: '#D5DDE7'}}/>
                        <label htmlFor="checkbox-radio-1"
                               className="cursor-pointer ml-2 text-sm border-slate-300/60 shadow-sm text-[#B1B1BB]">Male</label>
                    </div>
                </div>
                <div
                    className={`w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] rounded-r-none  rounded-l-none transition`}>
                    <div className={`flex items-center`}>
                        <input id={'checkbox-radio-2'} type={'radio'} name={'gender'}
                               className={`transition-all duration-100 ease-in-out shadow-sm border-slate-300/80 cursor-pointer rounded-full border-2 border-[#D5DDE7] checked:bg-[#3284A6]`}
                               style={{borderWidth: '3px', borderColor: '#D5DDE7'}}/>
                        <label htmlFor="checkbox-radio-2"
                               className="cursor-pointer ml-2 text-sm border-slate-300/60 shadow-sm text-[#B1B1BB]">Female</label>
                    </div>
                </div>
                <div
                    className={`w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] rounded-l-none transition`}>
                    <div className={`flex items-center`}>
                        <input id={'checkbox-radio-3'} type={'radio'} name={'gender'}
                               className={`transition-all duration-100 ease-in-out shadow-sm border-slate-300/80 cursor-pointer rounded-full border-2 border-[#D5DDE7] checked:bg-[#3284A6]`}
                               style={{borderWidth: '3px', borderColor: '#D5DDE7'}}/>
                        <label htmlFor="checkbox-radio-3"
                               className="cursor-pointer ml-2 text-sm border-slate-300/60 shadow-sm text-[#B1B1BB]">Prefer
                            Not to Say</label>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

function ProfileInfoEmail() {
    return <div className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">Email</div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    Please provide a valid email address that you have access to.
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row">
                <input
                    type="email"
                    placeholder="John@email.com"
                    className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed transition"
                />
            </div>
        </div>
    </div>;
}

function ProfileInfoPhoneNumber() {

    const [selected, setSelected] = useState('PS');

    return <div className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">Phone Number</div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    Please provide a valid phone number where we can reach you if needed.
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row mb-4">
                <input
                    type="number"
                    placeholder="+962 (7) 567-8901"
                    className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-r-none transition"
                />
                <div className="dropdown">
                    <FlagsSelect
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        countries={['PS', 'JO', 'LB', 'IQ', 'QA', 'SA', 'AE', 'BH', 'DZ', 'MA', 'YE', 'KW']}
                        customLabels={{
                            'PS': '+970',
                            'JO': '+962',
                            'LB': '+961',
                            'IQ': '+964',
                            'QA': '+974',
                            'SA': '+966',
                            'AE': '+971',
                            'BH': '+973',
                            'DZ': '+213',
                            'MA': '+212',
                            'YE': '+967',
                            'KW': '+965',
                        }}
                        className="menu-flags"
                    />
                </div>
            </div>

            <button className={`font-medium text-sm text-[#2F7B9C] border-none outline-none cursor-pointer`}>+ Add
                Phone
            </button>
        </div>
    </div>;
}

function ProfileInfoAddress() {
    return <div className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">Address</div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    Please provide the country and city address.
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row">
                <select
                    className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-r-none transition">
                    <option>Country</option>
                </select>
                <select
                    className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-l-none transition">
                    <option>City</option>
                </select>
            </div>


        </div>
    </div>;
}

function ProfileInfoEducation() {
    return <div
        className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label
            className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">Education</div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    This information is required for verification Academic degree and attached certificates.
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row">
                <select
                    className="w-full h-[37.6px] text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-r-none transition">
                    <option>Bachelors</option>
                    <option>Diploma</option>
                    <option>Masters</option>
                    <option>phd</option>
                </select>
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Attached Certificate"
                        className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#3284A6] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-l-none transition pr-10"
                    />
                    <img
                        src={UploadAttachedIcon}
                        alt="UploadAttachedIcon"
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 max-w-full cursor-pointer`}
                    />
                </div>
            </div>


        </div>
    </div>;
}

function ProfileInfoTrainer() {
    return <div
        className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label
            className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">Trainer</div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    This information is required for verification Company name and attach CV.
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row">
                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full h-[37.6px] text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-r-none transition"
                />

                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Attached Trainer Certificate"
                        className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#3284A6] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-l-none transition pr-10"
                    />
                    <img
                        src={UploadAttachedIcon}
                        alt="UploadAttachedIcon"
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 max-w-full cursor-pointer`}
                    />
                </div>
            </div>


        </div>
    </div>;
}

function ProfileInfoExperience() {
    return <div
        className={`flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0`}>
        <label
            className={`inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:mr-14`}>
            <div className={`text-left`}>
                <div className="flex items-center">
                    <div className="text-[#4D4D4D] text-sm font-semibold">Experience</div>
                    <div
                        className="ml-2.5 px-2 py-0.5 bg-slate-100 text-[#6E7178] text-xs rounded-md border border-slate-200">Required
                    </div>
                </div>
                <div
                    className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-[#B1B1BB]">
                    This information is required for verification Company name and attach training certificates.
                </div>
            </div>
        </label>
        <div className={`flex-1 w-full mt-3 xl:mt-0`}>
            <div className="flex flex-col items-center md:flex-row">
                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full h-[37.6px] text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#B1B1BB] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-r-none transition"
                />

                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Attached Resume C.V"
                        className="w-full text-sm border-slate-300/60 shadow-sm rounded-md placeholder:text-[#3284A6] px-3 py-2 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary outline-none border border-[#D5DDE7] disabled:bg-slate-100 disabled:cursor-not-allowed rounded-l-none transition pr-10"
                    />
                    <img
                        src={UploadAttachedIcon}
                        alt="UploadAttachedIcon"
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 max-w-full cursor-pointer`}
                    />
                </div>
            </div>


        </div>
    </div>;
}

function ProfileInfoActionButton() {
    return <div className={`flex items-center gap-4 justify-center`}>
        <button
            className={`transition h-[40px] w-[150px] cursor-pointer rounded-full bg-[#E4E7EB] text-center text-sm font-medium text-white focus:ring-4 focus:ring-[#247BA0] focus:ring-opacity-20 focus:border-secondary outline-none`}>Back
        </button>
        <button
            className={`transition h-[40px] w-[150px] cursor-pointer rounded-full bg-gradient-to-r from-[#359BBC] to-[#1B5C99] text-center text-sm font-medium text-white focus:ring-4 focus:ring-[#247BA0] focus:ring-opacity-20 focus:border-secondary outline-none`}>Submit
        </button>
    </div>;
}

const ProfilePage = () => {
    const [pinMenu, setPinMenu] = useState(false);
    return (
        <section id={'profile-page'}>
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

                                <div className="flex items-center justify-between h-10">
                                    <div className="text-lg font-medium text-white">Settings</div>
                                    <div
                                        className="transition duration-200 shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium bg-white/[0.1] hover:bg-white/[0.15] text-[#C5D0DF] cursor-pointer focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus-visible:outline-none">
                                        <img src={ReturnBackIcon} alt={'Go to My Profile icon'}
                                             className={`object-contain mr-3`}/>
                                        Go to My Profile
                                    </div>
                                </div>

                                <div className={`mt-3.5 grid grid-cols-12 gap-y-10 gap-x-6`}>
                                    <div className={`relative col-span-12 xl:col-span-3`}>
                                        <SettingsMenu/>
                                    </div>

                                    <div className={`flex flex-col col-span-12 xl:col-span-9 gap-y-7`}>

                                        <ProfileCover/>

                                        <div className={`flex flex-col p-5 box box--stacked`}>

                                            <div
                                                className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">Profile
                                                Info
                                            </div>

                                            <div className={`mb-9`}>

                                                <ProfileInfoFullName/>

                                                <ProfileInfoIdPassport/>

                                                <ProfileInfoBirthDate/>

                                                <ProfileInfoGender/>

                                                <ProfileInfoEmail/>

                                                <ProfileInfoPhoneNumber/>

                                                <ProfileInfoAddress/>

                                                <ProfileInfoEducation/>

                                                <ProfileInfoTrainer/>

                                                <ProfileInfoExperience/>

                                            </div>

                                            <ProfileInfoActionButton/>
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

export default ProfilePage;