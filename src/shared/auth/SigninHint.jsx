import {CloseHint, LampHint} from "../../assets/index.js";
import {useState} from "react";

const SigninHint = () => {
    const [isHintClose, setIsHintClose] = useState(false);
    const handleClosedHint = () => {
        setIsHintClose(prev => !prev)
    }
    return (
        <div
            className={`${isHintClose ? 'hidden' : 'block'} relative  text-primary leading-[1.7] flex items-center px-4 py-3 my-6 bg-[#F1F6F9] border-[1px] border-[#C8DEE6] rounded-[0.6rem]`}
            role="alert">
            <img src={LampHint} alt={'lamp hint img'} className={`stroke-[0.8] w-7 h-7 mr-2 fill-primary/10`}/>
            <div className="ml-1 mr-8">Welcome to {' '}<span className={`font-semibold`}>TOTAL {' '}</span>Aviation
                Training! Simply<span
                    className={`font-medium`}>Sign In</span> to explore and access our documentation.
            </div>
            <button
                type="button"
                className={`py-2 px-3 absolute right-0 my-auto mr-2 btn-close text-primary`}
                aria-label="Close"
                onClick={handleClosedHint}>
                <img src={CloseHint} alt={'close hint img'} className={`stroke-[1] w-3.5 h-3.5`}/>
            </button>

        </div>
    );
};


export default SigninHint;