import {SignupImage, TotalLogo} from "../../assets/index.js";
import InputField from "../../components/InputField.jsx";
import {SignButton} from "../../shared/auth/SignButton.jsx";
import PopupSettingMenu from "../../shared/PopupSettingMenu.jsx";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const NavigateSignIn = () => {
        navigate('/signin');
    }
    return (
        <section id={'signup-page'}>
            <div
                className="container grid lg:h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] py-10 px-5 sm:py-14 sm:px-10 md:px-36 lg:py-0 lg:pl-14 lg:pr-12 xl:px-24 mx-auto lg:mx-0">
                <div
                    className={`relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0 before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5`}>
                    <div className={`relative z-10 flex flex-col justify-center w-full h-full py-20`}>

                        <div className={`mx-auto`}>
                            <img src={TotalLogo} alt="Logo" className="h-[120px]"/>
                        </div>

                        <div className="mt-8">
                            <h3 className={`text-lg text-[#66768C] leading-7 font-GothamBold text-start`}>Sign Up</h3>

                            <div className="mt-2.5 text-xs text-start text-slate-600">
                                Already have an account?{' '}
                                <a className="font-semibold text-primary cursor-pointer" onClick={NavigateSignIn}>Sign In</a>
                            </div>

                            <div className="mt-8">

                                <InputField className={`mb-4`} label={'Full Name'} inputType={'text'}
                                            placeholder={'enter your full name'}/>
                                <InputField className={`mb-4`} label={'Mobile Number'} inputType={'number'}
                                            placeholder={'enter your mobile number'}/>
                                <InputField className={`mb-4`} label={'Email'} inputType={'email'}
                                            placeholder={'email@domain.com'}/>
                                <InputField className={`mb-4`} label={'Password'} inputType={'password'}
                                            placeholder={'**********'}/>

                                <div className="grid w-full h-1.5 grid-cols-12 gap-4 mt-3.5">
                                    <div
                                        className="h-full col-span-3 border rounded bg-[#247ba04d] border-slate-400/20 "></div>
                                    <div
                                        className="h-full col-span-3 border rounded bg-[#247ba04d] border-slate-400/20"></div>
                                    <div
                                        className="h-full col-span-3 border rounded bg-[#247ba04d] border-slate-400/20"></div>
                                    <div
                                        className="h-full col-span-3 border rounded bg-slate-400/30 border-slate-400/20"></div>
                                </div>

                                <a href="" className="block mt-3 text-xs text-slate-500/80">What is a secure
                                    password?</a>

                                <InputField className={`mt-4`} label={'Password Confirmation'} inputType={'password'}
                                            placeholder={'**********'}/>

                                <div className="flex mt-4 text-xs text-slate-500">
                                    <div className="flex items-center mr-auto">
                                        <input id="agree-privacy" type="checkbox"
                                               className="transition-all duration-100 ease-in-out shadow-sm cursor-pointer rounded mr-2.5 border-2 border-[#4E95B2] checked:bg-[#79AEC5]"/>
                                        <label className="text-xs text-slate-500 cursor-pointer select-none"
                                               htmlFor="agree-privacy">I agree to the Envato</label>

                                        <a className={`text-xs font-medium text-primary cursor-pointer ml-1`}>Privacy
                                            Policy.</a>
                                    </div>
                                </div>

                                <SignButton className={`mt-5`} buttonType={'contained'}>Sign Up</SignButton>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AuthAirplaneSignup/>

            <PopupSettingMenu bgColor={'#0B0D63'}/>
        </section>
    );
};
export default SignUp;


export const AuthAirplaneSignup = () => {
    return (
        <div className="fixed container grid w-screen inset-0 h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] 3xl:max-w-none pl-14 xl:lx-24 pr-0">
            <div className="relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 3xl:col-span-3 z-20 after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0] before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]">
            </div>

            <div className="h-full col-span-7 2xl:col-span-8 3xl:col-span-9 lg:relative before:content-[''] before:absolute before:lg:-ml-10 before:left-0 before:inset-y-0 before:bg-gradient-to-b before:from-[#03045E] before:to-[#0C4A6E] before:w-screen before:lg:w-[800%]">
                <div className="mix-blend-screen sticky top-0 z-10 flex-col justify-center hidden h-screen lg:flex">
                    <div className="relative">
                        <img src={SignupImage} alt="airplane image" className="h-[100%] w-[100%]" />
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