import React from "react";
import ValidationErrorDialog from "./ValidationErrorDialog.jsx";

const InputValidationField = ({
                                  parentDivClassName,
                                  labelHtmlFor,
                                  labelText,
                                  labelTextSpan,
                                  inputName,
                                  inputType,
                                  inputId,
                                  inputPlaceholder,
                                  error,
                                  inputRef,
                              }) => {
    return (
        <div className={`${parentDivClassName} input-form`}>
            <label htmlFor={labelHtmlFor} className="mb-2 flex flex-col w-full sm:flex-row">
                {labelText}
                <span className="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">{labelTextSpan}</span>
            </label>
            {inputName === "comment" ? (
                <textarea
                    name={inputName}
                    id={inputId}
                    type={inputType}
                    placeholder={inputPlaceholder}
                    style={{ borderWidth: "1px" }}
                    className={`w-full outline-none px-3 py-2 transition duration-200 ease-in-out text-sm shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary focus:border-opacity-40 ${
                        error ? "input-error" : ""
                    }`}
                    {...inputRef(inputName)}
                />
            ) : (
                <input
                    name={inputName}
                    id={inputId}
                    type={inputType}
                    placeholder={inputPlaceholder}
                    style={{ borderWidth: "1px" }}
                    className={`w-full outline-none px-3 py-2 transition duration-200 ease-in-out text-sm shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-secondary focus:ring-opacity-20 focus:border-secondary focus:border-opacity-40 ${
                        error ? "input-error" : ""
                    }`}
                    {...inputRef(inputName)}
                />
            )}
            {error && <div className="mt-2 text-danger">{error.message}</div>}
        </div>
    );
};

export default InputValidationField;
