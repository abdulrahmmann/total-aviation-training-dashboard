import DashboardLayout from "../layout/DashboardLayout.jsx";
import SidebarMenu from "../components/SidebarMenu.jsx";
import Navbar from "../shared/Navbar.jsx";
import {useState} from "react";
import '../index.css';
import ValidationForm from "../components/ValidationForm.jsx";

const ValidationPage = () => {
    const [pinMenu, setPinMenu] = useState(false);
    return (
        <section id={'validation-page'}>
            <DashboardLayout>
                <div>
                    {/* Start - Menu List */}
                    <SidebarMenu pinMenu={pinMenu} setPinMenu={setPinMenu}/>
                    {/* End - Menu List */}

                    {/* Start - Navbar - Header */}
                    <Navbar pinMenu={pinMenu}/>
                    {/* End - Navbar - Header */}

                    {/* Start - Validation - Components */}
                    <div
                        className={`transition-[margin,width] duration-100 xl:pl-3.5 pt-8 pb-16 relative z-10 xl:ml-[91px] ${pinMenu ? 'left-[70px]' : ''}`}>
                        <div className={`px-1 xl:px-[100px] mt-10`}>
                            <div className={`xl:container px-3 xl:px-0 mx-auto`}>

                                <div className="flex items-center h-10">
                                    <div className="text-lg font-medium text-white">Validation</div>
                                    <div className="mx-3 hidden lg:block text-slate-300">•</div>
                                    <div
                                        className="text-slate-300 leading-relaxed hidden lg:block">Discover
                                        the simplicity and power of our Validation component for building error-free and
                                        user-friendly forms in your web applications.
                                    </div>
                                </div>

                                <div className={`mt-3.5`}>
                                    <div className={`flex flex-col p-5 validation-box`}>
                                        <div
                                            className={`flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70`}>
                                            <div className="text-[0.94rem] text-grey font-bold">Implementation</div>
                                            <div
                                                className={`flex items-center w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0`}>
                                                <label htmlFor="show-example-1"
                                                       className="cursor-pointer ml-0 sm:ml-2 mr-4">Show example code</label>
                                                <input id={'show-example-1'} type={'checkbox'} style={{
                                                    width: '38px',
                                                    height: '24px',
                                                    borderRadius: '30px',
                                                    borderColor: 'rgb(203 213 225)'
                                                }}
                                                       className={`transition-all duration-100 ease-in-out shadow-sm border-slate-300/80 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-secondary focus:ring-opacity-20 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white ml-3 mr-0`}/>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="leading-relaxed text-grey">The Validation feature allows you
                                                to define
                                                and enforce data validation rules in your web forms. By setting up
                                                validation, you can ensure that user-submitted data meets specific
                                                criteria and is error-free.</p>
                                            <div
                                                className={`border rounded-[0.6rem] relative mt-7 mb-4 border-slate-200/80`}>
                                                <div
                                                    className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                                                    <div className="-mt-px">Example code / preview</div>
                                                </div>
                                                <div className={`px-5 py-2 mt-4 flex flex-col gap-3.5`}>
                                                    <ValidationForm/>
                                                    {/*<ValidationErrorDialog />*/}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* End - Validation - Components */}


                </div>
            </DashboardLayout>
        </section>
    );
};

export default ValidationPage;