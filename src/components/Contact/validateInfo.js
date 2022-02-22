const validate = (values) => {
    const errors = {};

    if (!values.user_name.trim()) errors.user_name = "can't be empty";

    if (!values.user_subject.trim()) errors.user_subject = "can't be empty";

    if (!values.message.trim()) errors.message = "can't be empty";

    if (!values.user_email.trim()) {
        errors.user_email = "can't be empty";
    } else if (!values.user_email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g)){
        errors.user_email = "invalid email address";
    } 

    return errors
}
export default validate;
