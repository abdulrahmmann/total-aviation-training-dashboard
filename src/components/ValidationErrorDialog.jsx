import { useState, useEffect } from "react";

const ValidationErrorDialog = () => {
    const [closeDialog, setCloseDialog] = useState(false);

    const handleCloseDialog = () => {
        setCloseDialog(true);
    };

    useEffect(() => {
        let timeoutId;
        if (!closeDialog) {
            timeoutId = setTimeout(() => {
                setCloseDialog(true);
            }, 3000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [closeDialog]);
    return (
        <div className={`py-5 px-5 bg-white border border-slate-200/60 rounded-lg shadow-xl flex w-fit fixed right-10 top-5 z-[1000] ${closeDialog ? 'hidden' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-xcircle stroke-[1] w-5 h-5 text-danger">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
            </svg>
            <div className={`mx-4`}>
                <h3 className={`p-0 m-0 text-grey font-semibold`}>Registration failed!</h3>
                <p className="p-0 mt-1 text-slate-500">Please check the field form.</p>
            </div>
            <button type="button" aria-label="Close" onClick={handleCloseDialog}>✖</button>
        </div>
    );
};
export default ValidationErrorDialog;



// const [visible, setVisible] = useState(true);
//
// useEffect(() => {
//     const timer = setTimeout(() => {
//         setVisible(false);
//     }, 5000000000000); // 5000 milliseconds = 5 seconds
//
//     return () => {
//         clearTimeout(timer);
//     };
// }, []);
//
// return visible ? (
//     <div className="error-dialog p-10 bg-lime-200">
//         <p className="text-red-600">error fields empty</p>
//     </div>
// ) : null;