import { NavLink } from "react-router-dom";
import { ChevronWhite } from "../assets/index.js";
import SearchBar from "./SearchBar.jsx";
import NavbarUtilities from "./NavbarUtilities.jsx";
import { useEffect, useState } from "react";
import SearchPopup from "./SearchPopup.jsx";
import SidebarMenu from "../components/SidebarMenu.jsx";

const Navbar = ({ pinMenu }) => {
    const [searchClick, setSearchClick] = useState(false);
    const [menuClick, setMenuClick] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [navbarWidth, setNavbarWidth] = useState('auto');

    const handleSearchClicked = () => {
        setSearchClick(prev => !prev);
    };
    const handleMenuClicked = () => {
        setMenuClick(prev => !prev);
    };
    const openSearchPopup = () => {
        setSearchClick(true);
    };

    const closeSearchPopup = () => {
        setSearchClick(false);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                openSearchPopup();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const container = document.querySelector('.xl\\:container');
            if (container) {
                setNavbarWidth(container.offsetWidth);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            className={`relative z-50 h-[65px] transition-[margin] duration-100 xl:pl-3.5 xl:ml-[91px] pt-8 inset-x-0 top-0 left-0 right-0 text-white ${pinMenu ? 'left-[70px]' : ''}`}>
            <div className={`px-1 xl:px-[100px]`}>
                <div className={`xl:container px-3 xl:px-0 mx-auto`}>
                    <div
                        className={`flex justify-between items-center transition-[padding,background-color,border-color] ease-in-out duration-300 ${isSticky ? 'fixed rounded-xl px-8 py-3 bg-gradient-to-l from-[#0a2463] to-[#247ba0] mx-auto' : ''} ${isSticky && pinMenu ? 'left-[270px] right-[30px]' : ''}`}
                        style={{ width: isSticky ? `${navbarWidth}px` : 'auto' }}>

                        <div className="flex items-center gap-1 xl:hidden">
                            <button className="p-2 text-white rounded-full hover:bg-white/5 cursor-pointer"
                                    onClick={handleMenuClicked}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="lucide lucide-align-justify stroke-[1] w-[18px] h-[18px]">
                                    <line x1="3" x2="21" y1="6" y2="6"></line>
                                    <line x1="3" x2="21" y1="12" y2="12"></line>
                                    <line x1="3" x2="21" y1="18" y2="18"></line>
                                </svg>
                            </button>
                            <button className="p-2 text-white rounded-full hover:bg-white/5 cursor-pointer"
                                    onClick={handleSearchClicked}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="lucide lucide-search stroke-[1] w-[18px] h-[18px]">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                            </button>
                        </div>

                        {menuClick && <SidebarMenu menuClick={menuClick} />}

                        {searchClick && <SearchPopup closePopup={handleSearchClicked} />}

                        <div className={`hidden xl:flex items-center`}>
                            <div className={`text-xs text-slate-200 font-medium inline-block cursor-pointer`}>
                                <NavLink to={'/'}>App</NavLink>
                                <img src={ChevronWhite} alt={'chevron white'}
                                     className={`rotate-[-90deg] w-3.5 h-3.5 inline-block`} />
                            </div>
                            <div className={`text-xs text-slate-200 font-medium inline-block`}>
                                Dashboards
                                <img src={ChevronWhite} alt={'chevron white'}
                                     className={`rotate-[-90deg] w-3.5 h-3.5 inline-block`} />
                            </div>
                            <div className={`text-xs text-slate-200 font-bold`}>
                                <NavLink to={''}>Analytics</NavLink>
                            </div>
                        </div>

                        <SearchBar />

                        <NavbarUtilities />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
