import {EmailSent, PasswordLinkSentImage, SignupImage, TotalLogo} from "../../assets/index.js";
import AuthAirplane from "../../shared/auth/AuthAirplane.jsx";
import PopupSettingMenu from "../../shared/PopupSettingMenu.jsx";
import PasswordSentHint from "../../shared/auth/PasswordSentHint.jsx";

const ConfirmPasswordSent = () => {
    return (
        <section id={'confirm-password-send'}>
            <div
                className="container grid lg:h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] py-10 px-5 sm:py-14 sm:px-10 md:px-36 lg:py-0 lg:pl-14 lg:pr-12 xl:px-24 mx-auto lg:mx-0">
                <div
                    className={`relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0 before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5`}>
                    <div className={`relative z-10 flex flex-col justify-center w-full h-full lg:py-20`}>

                        <div className={`mx-auto`}>
                            <img src={TotalLogo} alt="Logo" className={`h-[120px] object-contain`}/>
                        </div>

                        <div className="mt-12">
                            <div className={`mb-8`}>
                                <img src={EmailSent} alt={'email sent image'} className={`mx-auto`}/>
                            </div>
                            <h3 className={`text-lg text-[#68798E] font-semibold text-center`}>Password link sent</h3>

                            <h3 className={`text-sm text-[#68798E] font-semibold text-center mt-4`}>
                                Please check your inbox modza@gmail.com
                            </h3>

                            <PasswordSentHint/>

                        </div>

                    </div>
                </div>
            </div>

            <AuthAirplaneConfirmPasswordSent/>

            <PopupSettingMenu bgColor={'#0B0D63'}/>
        </section>
    );
};

export default ConfirmPasswordSent;

export const AuthAirplaneConfirmPasswordSent = () => {
    return (
        <div className="fixed container grid w-screen inset-0 h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] 3xl:max-w-none pl-14 xl:lx-24 pr-0">
            <div className="relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 3xl:col-span-3 z-20 after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0] before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]">
            </div>

            <div className="h-full col-span-7 2xl:col-span-8 3xl:col-span-9 lg:relative before:content-[''] before:absolute before:lg:-ml-10 before:left-0 before:inset-y-0 before:bg-gradient-to-b before:from-[#03045E] before:to-[#0C4A6E] before:w-screen before:lg:w-[800%]">
                <div className="mix-blend-screen sticky top-0 z-10 flex-col justify-center hidden h-screen lg:flex">
                    <div className="relative">
                        <img src={PasswordLinkSentImage} alt="airplane image" className="h-[100%] w-[100%]" />
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