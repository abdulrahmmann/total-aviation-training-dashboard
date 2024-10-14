import {useState} from "react";
import {Tooltips} from "../utils/Constants.js";

export const TooltipList = () => {
    const [tipActive, setTipActive] = useState(Tooltips[0].name);
    return (
        <div>
            <ul className="relative mb-5 flex flex-col py-2.5 rounded-[0.6rem] bg-white/10 border-[0.92px] border-white/20 text-slate-600/80">
                {Tooltips.map(({Id, name}) => (
                    <li
                        key={Id}
                        className={`relative pl-5 py-2 cursor-pointer ${
                            tipActive === name
                                ? `before:content-[""] before:absolute before:-left-[1px] before:w-[2px] before:h-2/3 before:z-50 ${name === 'Component API'? 'before:bg-[#4F555C]': 'before:bg-white'}`
                                : ""
                        }`}
                        onClick={() => setTipActive(name)}
                    >
                        <a className={`block font-medium -mt-px truncate ${name === 'Component API'? 'text-[#4F555C]': 'text-[#FFFFFFE6]'}`}>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};