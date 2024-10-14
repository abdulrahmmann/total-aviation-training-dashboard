import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import "../index.css";

export const ChartCardSlider = ({ TotalNumber }) => {
    const settings = {
        items: 1,
        autoplay: true,
        autoplayTimeout: 3500,
        speed: 0,
        loop: true,
        freezable: false,
        controls: false,
        nav: true,
    };

    const slides = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-medal absolute top-0 right-0 w-36 h-36 -mt-5 -mr-5 text-white/20 fill-white/[0.03] transform rotate-[-10deg] stroke-[0.3]">
                    <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                    <path d="M11 12 5.12 2.2"></path>
                    <path d="m13 12 5.88-9.8"></path>
                    <path d="M8 7h8"></path>
                    <circle cx="12" cy="17" r="5"></circle>
                    <path d="M12 18v-2h-.5"></path>
                </svg>
            ),
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-database absolute top-0 right-0 w-36 h-36 -mt-5 -mr-5 text-white/20 fill-white/[0.03] transform rotate-[-10deg] stroke-[0.3]">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
            ),
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-gauge absolute top-0 right-0 w-36 h-36 -mt-5 -mr-5 text-white/20 fill-white/[0.03] transform rotate-[-10deg] stroke-[0.3]">
                    <path d="m12 14 4-4"></path>
                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>
            ),
        }
    ];

    return (
        <div id="card-slider"
             className="w-full flex flex-col col-span-12 md:col-span-6 2xl:col-span-3 bg-gradient-to-b from-[#183B7D] to-[#2A90B4] relative box--chart--1 box--stacked--slider">
            <TinySlider settings={settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        {slide.icon}
                        <div className="pl-[1rem]">
                            <div className="text-5xl mt-[3.8rem] text-white font-BebasNeueBold mb-3">
                                {TotalNumber}
                            </div>
                            <div className="text-3xl text-white font-BebasNeueBold uppercase mb-8">
                                TOTAL
                            </div>
                            <a className="flex items-center text-xs text-white font-semibold gap-0">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-move-right stroke-[1] w-4 h-4 ml-1.5">
                                    <path d="M18 8L22 12L18 16"></path>
                                    <path d="M2 12H22"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </TinySlider>
        </div>
    );
};

