import SliderCard from "./SliderCard.jsx";
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import {BasicCoursesCards} from "../utils/Constants.js";

const BasicCoursesCardsSlider = () => {

    const settings = {
        items: 1,
        autoplay: false,
        autoplayTimeout: 1800,
        speed: 1000,
        controlsContainer: '#customize-controls',
        loop: true,
        freezable: false,
        gutter: 16,
        responsive: {
            1280: {
                items: 5,
            },
            900: {
                items: 3,
            },
            600: {
                items: 2,
            },
            480: {
                items: 1,
            },
        },
    };

    return (
        <div className="insights-cards-slider relative pb-10">
            <div id="customize-controls" aria-label="Carousel Navigation" tabIndex="0">
                <button
                    type="button"
                    data-controls="prev"
                    tabIndex="-1"
                    aria-controls="tns1"
                    className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 font-medium cursor-pointer focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus-visible:outline-none disabled:opacity-70 disabled:cursor-not-allowed rounded-[0.5rem] bg-white text-slate-600"
                >
                    <div className="flex items-center justify-center w-3.5 h-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-left stroke-[1] w-4 h-4"
                        >
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </div>
                </button>
                <button
                    type="button"
                    data-controls="next"
                    tabIndex="-1"
                    aria-controls="tns1"
                    className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 font-medium cursor-pointer focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus-visible:outline-none disabled:opacity-70 disabled:cursor-not-allowed rounded-[0.5rem] bg-white text-slate-600"
                >
                    <div className="flex items-center justify-center w-3.5 h-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right stroke-[1] w-4 h-4"
                        >
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </div>
                </button>
            </div>
            <div className={`absolute top-2 sm:top-5 left-0 text-sm font-semibold text-grey`}>
                Basic Courses
            </div>

            <TinySlider settings={settings} className="relative mt-10">
                {BasicCoursesCards.map((card) => (
                    <div key={card.Id}>
                        <SliderCard
                            Title={card.Title}
                            CardLogo={card.CardLogo}
                            RoundedImg1={card.RoundedImg1}
                            RoundedImg2={card.RoundedImg2}
                            RoundedImg3={card.RoundedImg3}
                        />
                    </div>
                ))}
            </TinySlider>
        </div>
    );
};
export default BasicCoursesCardsSlider;
