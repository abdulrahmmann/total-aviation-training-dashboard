import DashboardLayout from "../layout/DashboardLayout.jsx";
import SidebarMenu from "../components/SidebarMenu.jsx";
import Navbar from "../shared/Navbar.jsx";
import {useState} from "react";
import {TooltipList} from "../components/TooltipList.jsx";
import {LampTip} from "../assets/index.js";

const TooltipPage = () => {
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

                    {/* Start - Tooltip - Components */}
                    <div
                        className={`transition-[margin,width] duration-100 xl:pl-3.5 pt-8 pb-16 relative z-10 xl:ml-[91px] ${pinMenu ? 'left-[70px]' : ''}`}>
                        <div className={`px-1 xl:px-[100px] mt-10`}>
                            <div className={`xl:container px-3 xl:px-0 mx-auto`}>

                                <div className="flex items-center h-10">
                                    <div className="text-lg font-medium text-white">Tooltip</div>
                                    <div className="mx-3 hidden lg:block text-slate-300">•</div>
                                    <div className="text-slate-300 leading-relaxed hidden lg:block">
                                        Discover Discover the versatility of our Tooltip component for adding helpful
                                        hints and
                                        additional information to your user interface.
                                    </div>
                                </div>

                                <div className={`mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6`}>
                                    <div
                                        className={`relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7`}>
                                        <div className={`flex flex-col p-5 tooltip-box`}>
                                            <div
                                                className={`flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70`}>
                                                <div className="text-[0.94rem] text-grey font-bold">Basic Tooltip</div>
                                                <div
                                                    className={`flex items-center w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0`}>
                                                    <label htmlFor="show-example-1"
                                                           className="cursor-pointer ml-0 sm:ml-2 mr-4">Show example
                                                        code</label>
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
                                                <p className="leading-relaxed text-grey">
                                                    Tooltips are a helpful way to provide additional information or
                                                    descriptions for elements on a web page. They typically appear when
                                                    users hover over or interact with an element, offering context and
                                                    clarification. This section explains how to implement basic tooltips
                                                    in your web application.
                                                </p>

                                                <div
                                                    className={`border rounded-[0.6rem] relative mt-7 mb-4 border-slate-200/80`}>
                                                    <div
                                                        className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                                                        <div className="-mt-px">Example code / preview</div>
                                                    </div>
                                                    <div className={`px-5 py-6 mt-0 flex flex-col gap-3.5`}>
                                                        <div className={`text-center`}>
                                                            <button
                                                                className={`transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium focus:ring-4 focus:ring-primary/10 focus:ring-opacity-20 focus-visible:outline-none disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white cursor-pointer`}>
                                                                Show Tooltip
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="leading-relaxed text-grey">
                                                    The Basic Tooltip section has demonstrated how to use tooltips to
                                                    provide additional information and hints to users when they interact
                                                    with elements on your web page. By following these guidelines and
                                                    best practices, you can enhance user experience and provide valuable
                                                    context without overwhelming your UI.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`relative order-first col-span-12 lg:order-last lg:col-span-3 xl:col-span-2`}>

                                        <TooltipList/>

                                        <div
                                            className={`py-5 px-3.5 rounded-[0.6rem] bg-[#D09C3012] relative border-[0.79px] border-[#E6DDC4]`}>
                                            <h3 className={`p-0 m-0 text-sm text-grey font-semibold`}>Tips</h3>
                                            <h6 className={`p-0 m-0 text-xs text-grey font-semibold mt-4`}>Price</h6>

                                            <p className={`p-0 mt-2 text-[10px] text-[#5A6778] font-medium leading-4`}>
                                                The image format is .jpg .jpeg .png and a minimum size of 300 x 300
                                                pixels (For optimal images use a minimum size of 700 x 700 pixels).
                                            </p>
                                            <p className={`p-0 mt-2 text-[10px] text-[#5A6778] font-medium leading-4`}>
                                                Select product photos or drag and drop up to 5 photos at once here.
                                                Include min. 3 attractive photos to make the product more attractive to
                                                buyers.
                                            </p>
                                            <img src={LampTip} alt={'lamp tip img'}
                                                 className={`absolute top-[20px] right-[20px] object-contain`}/>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* End - Tooltip - Components */}
                </div>
            </DashboardLayout>
        </section>
    );
};

export default TooltipPage;