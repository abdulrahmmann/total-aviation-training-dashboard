import {
    AccordionIcon,
    AddProductsIcon, AlertIcon, ButtonIcon,
    CategoriesIcon, DownArrow, DropdownIcon, IconIcon,
    InvoiceIcon, LoadingIcon, LoginIcon, OverlayIcon, PinMenuArrowImg,
    ProductsIcon, ProgressBarIcon, RegisterIcon, RegularFormIcon, ReviewsIcon,
    SellersIcon, TabIcon, TooltipIcon,
    TotalLogo,
    TransactionIcon, TypographyIcon
} from "../assets/index.js";
import { useState } from "react";

const SidebarMenu = ({ pinMenu, setPinMenu, menuClick }) => {
    const [activeLink, setActiveLink] = useState(null);
    const [menuHover, setMenuHover] = useState(false);
    const [closeSidebar, setCloseSidebar] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(null);

    const handleMenuItemClick = (item) => {
        setActiveLink(item.title);
        if (item.hasDropdown) {
            setDropdownOpen(dropdownOpen === item.title ? null : item.title);
        } else {
            setDropdownOpen(null);
        }
    };

    const handleCloseSidebar = () => {
        setCloseSidebar(prev => !prev);
    };

    const menuItems = [
        { title: 'Invoice', icon: InvoiceIcon },
        { title: 'Categories', icon: CategoriesIcon },
        { title: 'Add Product', icon: AddProductsIcon },
        {
            title: 'Products', icon: ProductsIcon, hasDropdown: true, dropdownItems: [
                {
                    title: 'Product List',
                    icon: ProductsIcon,
                },
                {
                    title: 'Product Grid',
                    icon: ProductsIcon,
                },
            ]
        },
        { title: 'Transaction', icon: TransactionIcon, hasDropdown: true, dropdownItems: [] },
        { title: 'Sellers', icon: SellersIcon, hasDropdown: true, dropdownItems: [] },
        { title: 'Reviews', icon: ReviewsIcon },
        { title: 'Login', icon: LoginIcon },
        { title: 'Register', icon: RegisterIcon },
        { title: 'Table', icon: TabIcon, hasDropdown: true, dropdownItems: [] },
        { title: 'Overlay', icon: OverlayIcon, hasDropdown: true, dropdownItems: [] },
        { title: 'Accordion', icon: AccordionIcon },
        { title: 'Button', icon: ButtonIcon },
        { title: 'Alert', icon: AlertIcon },
        { title: 'ProgressBar', icon: ProgressBarIcon },
        { title: 'Tooltip', icon: TooltipIcon },
        { title: 'Dropdown', icon: DropdownIcon },
        { title: 'Typography', icon: TypographyIcon },
        { title: 'Icon', icon: IconIcon },
        { title: 'Loading', icon: LoadingIcon },
        { title: 'Regular Form', icon: RegularFormIcon }
    ];

    return (
        <div
            className={`z-[100] xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 inset-y-0 xl:py-3.5 xl:pl-3.5 ml-0`}>
            <button
                className={`block xl:hidden absolute top-0 -right-12 mt-5 z-[2000] cursor-pointer transition-all ${closeSidebar ? 'hidden' : ''} ${menuClick ? 'block' : 'hidden'}`}
                onClick={handleCloseSidebar}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-x stroke-[1] w-8 h-8 text-white">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            </button>
            <div
                className={`sidebar-menu-list ${pinMenu ? 'xl:w-[240px]' : 'xl:w-[80px]'} ${closeSidebar ? "hidden" : "block"} hover:xl:w-[240px] h-full box bg-[#f3f4f8] rounded-none xl:rounded-xl z-20 border-[1px] border-[#E3E7EA] relative duration-300 transition-[width] overflow-hidden xl:flex xl:flex-col ${menuClick ? 'block' : 'hidden'}`}
                onMouseEnter={() => setMenuHover(true)}
                onMouseLeave={() => setMenuHover(false)}
            >
                <div
                    className={`flex-none xl:flex items-center z-10 px-[16.5px] h-0 xl:h-[82px] w-[245px] overflow-hidden relative duration-300`}
                >
                    <a className="hidden xl:flex items-center transition-[margin] duration-300">
                        <img src={TotalLogo} alt="menu logo"
                             className={`h-[72px] ${pinMenu ? 'ml-[75px] transition-all' : ''} ${menuHover ? 'ml-[75px] transition-all' : ''}`}/>
                    </a>
                    <div
                        className="hidden xl:block cursor-pointer ml-auto transition-[opacity,transform] 3xl:flex items-center justify-center w-[20px] h-[20px] border rounded-full border-slate-600/40 hover:bg-slate-600/5"
                        onClick={() => setPinMenu(!pinMenu)}
                    >
                        <img src={PinMenuArrowImg} alt="pin menu arrow img"
                             className={`${pinMenu ? 'rotate-[180deg] transition' : 'rotate-[360deg] transition'}`}/>
                    </div>
                </div>

                <div className={`sidebar-menu-list w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3`}>
                    <div className="sidebar-content-wrapper">
                        <ul className="scrollable relative">
                            {(pinMenu || menuHover || menuClick) ? (
                                <li className="text-[10px] my-[.75rem] text-start font-medium text-[#64748b] whitespace-nowrap sidebar-section-name">E-COMMERCE</li>
                            ) : (
                                <li className="text-[10px] my-[.75rem] text-center font-medium text-[#64748b] whitespace-nowrap sidebar-section-name">...</li>
                            )}

                            {menuItems.slice(0, 7).map((item, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer side-menu__link hover:bg-[#fff] hover:border-[1px] hover:border-[#E3E7EA] shadow-[0 2px 3px #0000000b] ${activeLink === item.title ? 'side-menu__link__active' : ''}`}
                                    onClick={() => handleMenuItemClick(item)}
                                >
                                    <a className="flex justify-between items-center w-full">
                                        <div className="flex items-center">
                                            <img src={item.icon} alt={`${item.title} icon`}/>
                                            <div
                                                className={`${activeLink === item.title ? 'side-menu__link__title__active' : 'side-menu__link__title'}`}>{item.title}</div>
                                        </div>
                                        {item.hasDropdown && <img src={DownArrow} alt="down arrow"/>}
                                    </a>
                                    {item.hasDropdown && dropdownOpen === item.title && (
                                        <ul className="mt-2">
                                            {item.dropdownItems.map((dropdownItem, index) => (
                                                <li key={index} className={`cursor-pointer side-menu__link hover:bg-[#fff] hover:border-[1px] hover:border-[#E3E7EA] shadow-[0 2px 3px #0000000b] ${activeLink === dropdownItem.title ? 'side-menu__link__active' : ''}`}>
                                                    <img src={item.icon} alt={""} />
                                                    <div className={`side-menu__link__title`}>{dropdownItem.title}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}

                            {(pinMenu || menuHover || menuClick) ? (
                                <li className="text-[10px] my-[.75rem] text-start font-medium text-[#64748b] whitespace-nowrap sidebar-section-name">AUTHENTICATIONS</li>
                            ) : (
                                <li className="text-[10px] my-[.75rem] text-center font-medium text-[#64748b] whitespace-nowrap sidebar-section-name">...</li>
                            )}

                            {menuItems.slice(7, 9).map((item, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer side-menu__link hover:bg-[#fff] hover:border-[1px] hover:border-[#E3E7EA] shadow-[0 2px 3px #0000000b] ${activeLink === item.title ? 'side-menu__link__active' : ''}`}
                                    onClick={() => handleMenuItemClick(item)}
                                >
                                    <a className="flex justify-between items-center w-full">
                                        <div className="flex items-center">
                                            <img src={item.icon} alt={`${item.title} icon`}/>
                                            <div
                                                className={`${activeLink === item.title ? 'side-menu__link__title__active' : 'side-menu__link__title'}`}>{item.title}</div>
                                        </div>
                                        {item.hasDropdown && <img src={DownArrow} alt="down arrow"/>}
                                    </a>
                                </li>
                            ))}

                            {(pinMenu || menuHover || menuClick) ? (
                                <li className="text-[10px] my-[.75rem] text-start font-medium text-[#64748b] whitespace-nowrap sidebar-section-name">COMPONENTS</li>
                            ) : (
                                <li className="text-[10px] my-[.75rem] text-center font-medium text-[#64748b] whitespace-nowrap sidebar-section-name">...</li>
                            )}

                            {menuItems.slice(9).map((item, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer side-menu__link hover:bg-[#fff] hover:border-[1px] hover:border-[#E3E7EA] shadow-[0 2px 3px #0000000b] ${activeLink === item.title ? 'side-menu__link__active' : ''}`}
                                    onClick={() => handleMenuItemClick(item)}
                                >
                                    <a className="flex justify-between items-center w-full">
                                        <div className="flex items-center">
                                            <img src={item.icon} alt={`${item.title} icon`}/>
                                            <div
                                                className={`${activeLink === item.title ? 'side-menu__link__title__active' : 'side-menu__link__title'}`}>{item.title}</div>
                                        </div>
                                        {item.hasDropdown && <img src={DownArrow} alt="down arrow"/>}
                                    </a>
                                    {item.hasDropdown && dropdownOpen === item.title && (
                                        <ul className="mt-2">
                                            {item.dropdownItems.map((dropdownItem, index) => (
                                                <li key={index} className={`cursor-pointer side-menu__link hover:bg-[#fff] hover:border-[1px] hover:border-[#E3E7EA] shadow-[0 2px 3px #0000000b] ${activeLink === dropdownItem.title ? 'side-menu__link__active' : ''}`}>
                                                    {dropdownItem.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
