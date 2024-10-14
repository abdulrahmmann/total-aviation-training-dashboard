import {SigninImage} from "../../assets/index.js";

const AuthAirplane = () => {
    return (
        <div className="fixed container grid w-screen inset-0 h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] 3xl:max-w-none pl-14 xl:lx-24 pr-0">
            <div className="relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 3xl:col-span-3 z-20 after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0] before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]">
            </div>

            <div className="h-full col-span-7 2xl:col-span-8 3xl:col-span-9 lg:relative before:content-[''] before:absolute before:lg:-ml-10 before:left-0 before:inset-y-0 before:bg-gradient-to-b before:from-[#03045E] before:to-[#0C4A6E] before:w-screen before:lg:w-[800%]">
                <div className="mix-blend-screen sticky top-0 z-10 flex-col justify-center hidden h-screen lg:flex">
                    <div className="relative">
                        <img src={SigninImage} alt="airplane image" className="h-[100%] w-[100%]" />
                        <div className="relative bottom-[30%] text-base leading-relaxed xl:text-md text-white/70 xl:px-[116px] px-[45px]">
                            TAT is a Jordanian training organization that is recognized and approved by Jordan Civil
                            Aviation Regulatory Commission (CARC)
                            and European Union Aviation Safety Agency (EASA) as a Maintenance Training Organization
                            (MTO)
                            and Theoretical Training Organization
                            (TTO) to provide Type Training, Specialized courses, Dangerous Goods Regulations, Ground
                            Handling training and many aviation courses,
                            as well as, aviation consultations.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthAirplane;