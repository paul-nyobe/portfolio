import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import validate from './validateInfo'

const useForm = () => {
    const formRef = useRef();
    const initialValues = {
        user_name: '',
        user_phone: '',
        user_email: '',
        user_subject: '',
        message: ''
    };
    const [values, setValues] = useState(initialValues)

    const [errors, setErrors] = useState({});

    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setErrors(validate(values));
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            emailjs.sendForm('service_k0krerl', 'template_vxtjnsl', formRef.current, 'user_hMyBZ1fZ72PVzH4kdDkLV')
            .then((result) => {
                setFailure(false);
                setSuccess(true);
                setValues(initialValues);
                setTimeout(() => {
                    setSuccess(false);
                },5000)
            }, (error) => {
                setFailure(true);
                setSuccess(false);
            });
            setIsSubmit(false);
        }
    }, [errors, isSubmit]);
    
    return { values, onChange, sendEmail, errors, formRef, success, failure }
}

export default useForm