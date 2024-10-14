import '../index.css';
import {ExploreArrow} from "../assets/index.js";

const SliderCard = ({CardLogo, Title, RoundedImg1, RoundedImg2, RoundedImg3, onExploreClick}) => {
    return (
        <div className="bg-white p-5 slider-box box--stacked">
            <div className="flex justify-between items-start h-[80px] mb-[32px]">
                <img src={CardLogo} alt=""
                     className=""/>

                <div className="flex items-center">
                    <div className="w-10 h-10 -ml-5">
                        <img src={RoundedImg1} alt=""/>
                    </div>
                    <div className="w-10 h-10 -ml-5">
                        <img src={RoundedImg2} alt=""/>
                    </div>
                    <div className="w-10 h-10 -ml-5">
                        <img src={RoundedImg3} alt=""/>
                    </div>
                </div>
            </div>
            <div
                className="text-base text-[#2574A2] font-BebasNeueBold  pb-2 border-b-2 border-dashed border-[#E5E7EB]">
                {Title}
            </div>
            <div className="flex items-center gap-2 mt-4 cursor-pointer" onClick={onExploreClick}>
                <div className="text-sm text-[#2574A2]">Explore</div>
                <img src={ExploreArrow} alt={'explore arrow img'} className={`object-contain w-[14px] h-[14px]`}/>
            </div>
        </div>
    );
};

export default SliderCard;