import {SearchIcon} from "../assets/index.js";
import {useEffect, useState} from 'react';
import SearchPopup from './SearchPopup.jsx';

const SearchBar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                togglePopup();
            }
        };

        if (isPopupOpen) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        // Clean up the event listener when the component is unmounted or popup state changes
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isPopupOpen, togglePopup]);

    return (
        <div className={`hidden xl:block`}>
            <div
                onClick={togglePopup}
                className={`bg-white/[0.1] cursor-pointer border-transparent border w-[340px] ml-0 xl:-ml-[100px] flex items-center py-2 px-3.5 rounded-[0.5rem] text-white/60 hover:bg-white/[0.15] transition-colors duration-300 hover:duration-100`}
            >
                <img src={SearchIcon} alt={'search icon'}/>
                <input
                    className={`ml-2.5 mr-auto cursor-pointer outline-none w-full bg-transparent text-xs text-[#fff] placeholder:text-xs placeholder:font-semibold placeholder:text-[#C5D0DF]`}
                    placeholder="Quick search..."
                    readOnly
                />
                <div className={`text-sm`}>⌘K</div>
            </div>
            {
                isPopupOpen && <SearchPopup closePopup={togglePopup}/>
            }
        </div>
    );
};

export default SearchBar;
