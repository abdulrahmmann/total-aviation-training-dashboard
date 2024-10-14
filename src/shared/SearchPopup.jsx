import SearchNotFound from "../components/SearchNotFound.jsx";
import { useState, useEffect } from "react";
import SearchPopupContent from "../components/SearchPopupContent.jsx";
import ReactDOM from "react-dom";

const SearchPopup = ({ closePopup }) => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const disableScroll = () => {
            document.body.style.overflow = 'hidden';
        };
        const enableScroll = () => {
            document.body.style.overflowY= 'auto';
        };
        disableScroll();
        return () => {
            enableScroll();
        };
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return ReactDOM.createPortal(
        <div className={`relative z-50`}>
            <div
                className={`w-full h-full fixed inset-0 backdrop-blur-sm opacity-100`} style={{background: 'rgb(0 0 0 / 20%)'}}
                onClick={closePopup}></div>

            <div className={`fixed inset-0 overflow-y-auto`}>
                <div className={`flex justify-center my-2 sm:mt-40`}>
                    <div className={`sm:w-[600px] lg:w-[700px] w-[95%] relative mx-auto transition-transform`}>

                        <div className={`relative`}>
                            <div className="absolute inset-y-0 left-0 flex items-center justify-center w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="lucide lucide-search w-5 h-5 -mr-1.5 text-slate-500 stroke-[1]">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                            </div>
                            <input type={'text'}
                                   value={searchValue}
                                   onChange={handleSearchInputChange}
                                   placeholder={'Quick Search...'}
                                   className={`outline-none disabled:bg-slate-100 disabled:cursor-not-allowed transition duration-200 ease-in-out w-full border-slate-300/60 text-slate-700 placeholder:text-slate-400/90 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary focus:border-opacity-40 pl-12 pr-14 py-3.5 text-base rounded-lg focus:ring-0 border-0 shadow-lg`}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center w-14 cursor-pointer"
                                 onClick={closePopup}>
                                <div
                                    className="px-2 py-1 mr-auto text-xs border rounded-[0.4rem] bg-slate-100 text-slate-500/80">ESC
                                </div>
                            </div>
                        </div>

                        {
                            searchValue.length !== 0 && <SearchPopupContent />
                        }

                        {
                            searchValue.length === 0 && <SearchNotFound searchValue={searchValue} />
                        }

                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('search-popup-portal')
    );
};

export default SearchPopup;
