const SearchNotFound = ({searchValue}) => {
    return (
        <div className="relative z-10 pb-1 mt-1 bg-white rounded-lg shadow-lg max-h-[468px] sm:max-h-[615px] overflow-y-auto">
            <div className="flex flex-col items-center justify-center pt-20 pb-28">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                     strokeLinejoin="round"
                     className="lucide lucide-search-x text-[rgba(36, 123, 160, 0.2)] fill-[rgba(36, 123, 160, 0.05)] stroke-[0.5]"
                     style={{
                         width: "5rem",
                         height: "5rem",
                         color: "rgba(36, 123, 160, 0.2)",
                         fill: "rgba(36, 123, 160, 0.05)"
                     }}
                >
                    <path d="m13.5 8.5-5 5"></path>
                    <path d="m8.5 8.5 5 5"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </svg>
                <div className="mt-5 text-xl font-medium text-grey">No result found</div>
                <div className="w-2/3 mt-3 leading-relaxed text-center text-slate-500">No results found
                    for <span className="italic font-medium">{searchValue}</span>Please try a different
                    search term or check your spelling.
                </div>
            </div>
        </div>
    );
}
export default SearchNotFound;