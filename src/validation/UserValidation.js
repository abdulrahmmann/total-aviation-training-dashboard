import * as yup from "yup";
export const userSchema = yup.object().shape({
    name: yup.string().required("name is a required field"),

    email: yup.string().email("email format is not valid").required("email is a required field"),

    password: yup.string().min(6).required("password is a required field"),

    age: yup.number().min(1).max(3).required("age must be a `number` type, but the final value was: `NaN` (cast from the value)"),

    profileUrl: yup.string().url().notRequired(),

    comment: yup.string().required("comment is a required field")
});
