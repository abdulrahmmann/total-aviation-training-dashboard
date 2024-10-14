
const InputField = (props) => {
    return (
        <div className={props.className}>
            <label className={`text-xs inline-block mb-2 font-semibold`}>
                {props.label}<span className="text-danger">*</span>
            </label>
            <input
                style={{backgroundColor: 'white'}}
                type={props.inputType}
                placeholder={props.placeholder}
                className={`w-full outline-none text-xs placeholder:text-slate-300 placeholder:font-GothamBook bg-white transition duration-200 ease-in-out shadow-sm 
                  px-4 py-3.5 rounded-[0.6rem] border-[1px] border-slate-300 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus-visible:outline-none`}
            />
        </div>

    );
};

export default InputField;