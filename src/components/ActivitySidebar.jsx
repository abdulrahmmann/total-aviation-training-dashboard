import {useEffect} from "react";

const ActivitySidebar = () => {
    useEffect(() => {
        const disableScroll = () => {
            document.body.style.overflow = 'hidden';
        };

        const enableScroll = () => {
            document.body.style.overflow = 'auto';
        };

        disableScroll();

        return () => {
            enableScroll();
        };
    }, []);
    return (
        <div className={`relative z-[100] overflow-hidden`}>
            <div
                className={`w-full h-full fixed inset-0 backdrop-blur-sm opacity-100 overflow-hidden`} style={{background: 'rgb(0 0 0 / 20%)'}}></div>

            <div className={`fixed inset-y-0 right-0`}>
                <div className={`ml-auto h-screen flex flex-col bg-white relative shadow-md transition-transform sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]`}>
                    <a href="" className="focus:outline-none hover:bg-white/10 bg-white/5 transition-all hover:rotate-180 absolute inset-y-0 left-0 right-auto flex items-center justify-center my-auto -ml-[60px] sm:-ml-[105px] border rounded-full text-white/90 w-8 h-8 sm:w-14 sm:h-14 border-white/90 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-x w-3 h-3 sm:w-8 sm:h-8 stroke-[1]">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    </a>

                    <div className={`overflow-y-auto flex-1 p-0`}>
                        <div className={`flex flex-col`}>
                            <div className={`px-8 pt-6 pb-8`}>
                                <div className="text-base text-grey font-semibold">Activities</div>
                                <div className="text-slate-500 mt-0.5">Choose your Activities</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActivitySidebar;