const RecentCourseLayout = ({children}) => {
    return (
        <div className={`mt-6 overflow-x-auto lg:overflow-x-visible pb-10`}>
            <table className={`w-full text-left border-spacing-y-[10px] border-separate`}>
                <thead>
                    {children}
                </thead>
            </table>
        </div>
    );
};

export default RecentCourseLayout;

