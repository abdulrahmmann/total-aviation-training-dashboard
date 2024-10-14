export const SignButton = ({buttonType, children, className, onClick}) => {
    return (
        <button onClick={onClick} className={`${className} w-full py-3.5 mr-3 text-xs transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-full px-3 
        cursor-pointer focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus-visible:outline-none font-GothamMedium
        ${buttonType === 'contained' ? 'text-white bg-gradient-to-r from-[#359BBC] to-[#1B5C99] border-[1px] border-[#247BA0]' : 'text-[#2E679E] bg-white border-[1px] border-[#E2E8F0]'}`}>
            {children}
        </button>
    );
};

