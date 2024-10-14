import {ProductImg1, ProductImg2, ProductImg3, UserImg1, UserImg2, UserImg3} from "../assets/index.js";

const SearchPopupContent = () => {
    return (
        <div className={`relative z-10 pb-1 mt-1 bg-white rounded-lg shadow-lg max-h-[468px] sm:max-h-[615px] overflow-y-none`}>
            <div>

                <div className={`px-5 py-4`}>
                    <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">Start your search here...</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3.5">
                        <a href="" className="flex items-center gap-x-1.5 text-slate-700 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-users-round w-4 h-4 stroke-[1.3]">
                            <path d="M18 21a8 8 0 0 0-16 0"></path>
                            <circle cx="10" cy="8" r="5"></circle>
                            <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                        </svg>
                        Users
                        </a>
                        <a href="" className="flex items-center gap-x-1.5 text-slate-700 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-building2 w-4 h-4 stroke-[1.3]">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                        </svg>
                        Departments</a>
                        <a href="" className="flex items-center gap-x-1.5 text-slate-700 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-kanban-square w-4 h-4 stroke-[1.3]">
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            <path d="M8 7v7"></path>
                            <path d="M12 7v4"></path>
                            <path d="M16 7v9"></path>
                        </svg>
                        Products</a>
                        <a href="" className="flex items-center gap-x-1.5 text-slate-700 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-mail-check w-4 h-4 stroke-[1.3]">
                            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            <path d="m16 19 2 2 4-4"></path>
                        </svg>
                        Mails</a>
                        <div className="relative">
                            <a className="cursor-pointer flex items-center gap-x-1.5 text-slate-700 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50"
                            >More
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-chevron-down w-4 h-4 stroke-[1.3] -ml-0.5">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                </div>

                <div className={`px-5 py-4 border-t border-dashed`}>
                    <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">Users</div>
                        <a className="ml-auto text-xs text-slate-500" href="">See All</a>
                    </div>
                    <div className={`flex flex-col gap-1 mt-3.5`}>
                        <a href="" className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md">
                            <div
                                className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                                <img alt="Tailwise - Admin Dashboard Template" src={UserImg1}/>
                            </div>
                            <div className="text-sm text-grey font-semibold truncate">Johnny Depp</div>
                            <div className="hidden text-sm text-slate-500 sm:block">Denver, USA</div>
                        </a>
                        <a href="" className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md">
                            <div
                                className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                                <img alt="Tailwise - Admin Dashboard Template" src={UserImg2}/>
                            </div>
                            <div className="text-sm text-grey font-semibold truncate">Tom Hanks</div>
                            <div className="hidden text-sm text-slate-500 sm:block">New York, USA</div>
                        </a>
                        <a href="" className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md">
                            <div
                                className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                                <img alt="Tailwise - Admin Dashboard Template" src={UserImg3}/>
                            </div>
                            <div className="text-sm text-grey font-semibold truncate">Meryl Streep</div>
                            <div className="hidden text-sm text-slate-500 sm:block">Los Angeles, USA</div>
                        </a>
                    </div>
                </div>

                <div className={`px-5 py-4 border-t border-dashed`}>
                    <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">Departments</div>
                        <a className="ml-auto text-xs text-slate-500" href="">See All</a>
                    </div>
                    <div className={`flex flex-col gap-1 mt-3.5`}>
                        <a href="" className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md">
                            <div
                                className="flex items-center justify-center w-6 h-6 overflow-hidden border rounded-md border-theme-1/10 box bg-theme-1/10"
                                style={{background: 'rgba(36, 123, 160, 0.1)', borderColor: 'rgba(36, 123, 160, 0.1)'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="lucide lucide-hotel w-3.5 h-3.5 stroke-[1.3]"
                                     style={{color: 'rgb(36, 123, 160)'}}>
                                    <path
                                        d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
                                    <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path>
                                    <path d="M8 7h.01"></path>
                                    <path d="M16 7h.01"></path>
                                    <path d="M12 7h.01"></path>
                                    <path d="M12 11h.01"></path>
                                    <path d="M16 11h.01"></path>
                                    <path d="M8 11h.01"></path>
                                    <path d="M10 22v-6.5m4 0V22"></path>
                                </svg>
                            </div>
                            <div className="text-slate-700 font-medium truncate">Sales</div>
                            <div className="hidden text-slate-500 sm:block">Pakistan</div>
                        </a>
                        <a href="" className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md">
                            <div
                                className="flex items-center justify-center w-6 h-6 overflow-hidden border rounded-md border-theme-1/10 box bg-theme-1/10"
                                style={{background: 'rgba(36, 123, 160, 0.1)', borderColor: 'rgba(36, 123, 160, 0.1)'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="lucide lucide-hotel w-3.5 h-3.5 stroke-[1.3]"
                                     style={{color: 'rgb(36, 123, 160)'}}>
                                    <path
                                        d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
                                    <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path>
                                    <path d="M8 7h.01"></path>
                                    <path d="M16 7h.01"></path>
                                    <path d="M12 7h.01"></path>
                                    <path d="M12 11h.01"></path>
                                    <path d="M16 11h.01"></path>
                                    <path d="M8 11h.01"></path>
                                    <path d="M10 22v-6.5m4 0V22"></path>
                                </svg>
                            </div>
                            <div className="text-slate-700 font-medium truncate">Sales</div>
                            <div className="hidden text-slate-500 sm:block">Pakistan</div>
                        </a>
                        <a href="" className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md">
                            <div
                                className="flex items-center justify-center w-6 h-6 overflow-hidden border rounded-md border-theme-1/10 box bg-theme-1/10"
                                style={{background: 'rgba(36, 123, 160, 0.1)', borderColor: 'rgba(36, 123, 160, 0.1)'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="lucide lucide-hotel w-3.5 h-3.5 stroke-[1.3]"
                                     style={{color: 'rgb(36, 123, 160)'}}>
                                    <path
                                        d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
                                    <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path>
                                    <path d="M8 7h.01"></path>
                                    <path d="M16 7h.01"></path>
                                    <path d="M12 7h.01"></path>
                                    <path d="M12 11h.01"></path>
                                    <path d="M16 11h.01"></path>
                                    <path d="M8 11h.01"></path>
                                    <path d="M10 22v-6.5m4 0V22"></path>
                                </svg>
                            </div>
                            <div className="text-slate-700 font-medium truncate">Sales</div>
                            <div className="hidden text-slate-500 sm:block">Pakistan</div>
                        </a>
                    </div>
                </div>

                <div className={`px-5 py-4 border-t border-dashed`}>
                    <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">Products</div>
                        <a className="ml-auto text-xs text-slate-500" href="">See All</a>
                    </div>
                    <div className={`flex flex-col gap-1 mt-3.5`}>
                        <a href="" className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md">
                            <div
                                className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                                <img alt="Tailwise - Admin Dashboard Template" src={ProductImg1}/>
                            </div>
                            <div className="text-slate-700 font-medium truncate">Professional DSLR Camera</div>
                            <div className="hidden text-slate-500 sm:block">Sports &amp; Outdoors</div>
                        </a>

                        <a href="" className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md">
                            <div
                                className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                                <img alt="Tailwise - Admin Dashboard Template" src={ProductImg2}/></div>
                            <div className="text-slate-700 font-medium truncate">8-Cup Coffee Maker</div>
                            <div className="hidden text-slate-500 sm:block">Toys &amp; Games</div>
                        </a>

                        <a href="" className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md">
                            <div className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                                <img alt="Tailwise - Admin Dashboard Template" src={ProductImg3}/></div>
                            <div className="text-slate-700 font-medium truncate">Wireless Noise-Cancelling Headphones</div>
                            <div className="hidden text-slate-500 sm:block">Food &amp; Grocery</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPopupContent;