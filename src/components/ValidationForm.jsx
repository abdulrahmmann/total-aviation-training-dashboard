import InputValidationField from "./InputValidationField.jsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {userSchema} from "../validation/UserValidation.js";
import ValidationErrorDialog from "./ValidationErrorDialog.jsx";

const ValidationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            age: "",
            profileUrl: "",
            comment: "",
        },
        resolver: yupResolver(userSchema),
    });

    const onUserSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(onUserSubmit)} className={`validate-form`}>
            {
                Object.keys(errors).length > 0 && <ValidationErrorDialog />
            }
            <InputValidationField labelHtmlFor={'validation-form-1'}
                                  labelText={'Name'}
                                  labelTextSpan={'Required, at least 2 characters'}
                                  inputName={'name'} inputType={'text'}
                                  inputId={'validation-form-1'}
                                  inputPlaceholder={'John Legend'}
                                  error={errors.name}
                                  inputRef={register}/>

            <InputValidationField parentDivClassName={'mt-3'}
                                  labelHtmlFor={'validation-form-2'}
                                  labelText={'email'}
                                  labelTextSpan={'Required, email address format'}
                                  inputName={'email'} inputType={'text'}
                                  inputId={'validation-form-2'}
                                  inputPlaceholder={'example@gmail.com'}
                                  error={errors.email}
                                  inputRef={register}/>

            <InputValidationField parentDivClassName={'mt-3'}
                                  labelHtmlFor={'validation-form-3'}
                                  labelText={'Password'}
                                  labelTextSpan={'Required, at least 6 characters'}
                                  inputName={'password'}
                                  inputType={'password'}
                                  inputId={'validation-form-3'}
                                  inputPlaceholder={'secret'}
                                  error={errors.password}
                                  inputRef={register}/>

            <InputValidationField parentDivClassName={'mt-3'}
                                  labelHtmlFor={'validation-form-4'}
                                  labelText={'Age'}
                                  labelTextSpan={'Required, integer only & maximum 3 characters'}
                                  inputName={'age'}
                                  inputType={'number'}
                                  inputId={'validation-form-4'}
                                  inputPlaceholder={'22'}
                                  error={errors.age}
                                  inputRef={register}/>

            <InputValidationField parentDivClassName={'mt-3'}
                                  labelHtmlFor={'validation-form-5'}
                                  labelText={'Profile URL'}
                                  labelTextSpan={'Optional, URL format'}
                                  inputName={'url'}
                                  inputType={'text'}
                                  inputId={'validation-form-5'}
                                  inputPlaceholder={'https://google.com'}
                                  error={errors.profileUrl}
                                  inputRef={register}/>

            <InputValidationField parentDivClassName={'mt-3'}
                                  labelHtmlFor={'validation-form-6'}
                                  labelText={'Comment'}
                                  labelTextSpan={'Required, at least 10 characters'}
                                  inputName={'comment'}
                                  inputType={'text'}
                                  inputId={'validation-form-6'}
                                  inputPlaceholder={'Type your comments'}
                                  error={errors.comment}
                                  inputRef={register}/>

            <button type="submit"
                    className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-nonedisabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mt-5">Register
            </button>
        </form>
    );
};

export default ValidationForm;