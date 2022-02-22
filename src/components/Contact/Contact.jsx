import './contact.css';
import 'aos/dist/aos.css';
import { SectionTitle, Socials } from '../../snippets';
import contactImg from '../../images/contact.png';
import { general } from '../../data';
import Aos from 'aos';
import { useEffect } from 'react';
import useForm from './useForm'
import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
    const { values, onChange, sendEmail, errors, formRef, success, failure } = useForm()

    useEffect(()=>{
        Aos.init({duration:500, delay:100, once:true})
    }, []);

    return (
        <div className="contact section-gap section-separator" id="contact">
            <div className="container">
                <SectionTitle title='contact' description='Contact With Me'/>
                <div className="contact-inner">
                    <div className="contact-about" data-aos='fade-up' data-aos-delay="100" >
                        <div className="thumbnail">
                            <img src={contactImg} alt="paul nyobe contact" />
                        </div>
                        <div className="title-area">
                            <h4 className="title">{general.name}</h4>
                            <span>{general.title}</span>
                        </div>
                        <div className="description">
                            <p>{general.freelanceText}</p>
                            <span className="phone">
                                Phone: <a href={`tel:${general.phone}`}>{general.phone}</a>
                            </span>
                            <span className="phone">
                                Email: <a href={`mailto:${general.email}`}>{general.email}</a>
                            </span>
                        </div>
                        <Socials title="find with me" />
                    </div>
                    <div className="contact-form-wrapper" data-aos='fade-up' data-aos-delay="300" >
                        <div className="introduce">
                            <form ref={formRef} onSubmit={sendEmail}>
                                <div className="group">
                                    <div className="form-group">
                                        <label htmlFor="user_name ">your name</label>
                                        <input type="text" name="user_name" id="user_name" onChange={onChange} value={values.user_name} />
                                        { errors.user_name && <span className="error">{errors.user_name}</span>}
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="form-group">
                                        <label htmlFor="user_phone ">phone number</label>
                                        <input type="text" name="user_phone" id="user_phone" onChange={onChange} value={values.user_phone} />
                                        { errors.user_phone && <span className="error">{errors.user_phone}</span>}
                                    </div>
                                </div>
                                <div className="group-full">
                                    <div className="form-group">
                                        <label htmlFor="user_email ">email</label>
                                        <input type="text" name="user_email" id="user_email" onChange={onChange} value={values.user_email} />
                                        { errors.user_email && <span className="error">{errors.user_email}</span> }
                                    </div>
                                </div>
                                <div className="group-full">
                                    <div className="form-group">
                                        <label htmlFor="user_subject ">subject</label>
                                        <input type="text" name="user_subject" id="user_subject" onChange={onChange} value={values.user_subject} />
                                        { errors.user_subject && <span className="error">{errors.user_subject}</span> }
                                    </div>
                                </div>
                                <div className="group-full">
                                    <div className="form-group">
                                        <label htmlFor="message ">your message</label>
                                        <textarea type="text" name="message" id="message" onChange={onChange} value={values.message} cols="30" rows="10"></textarea>
                                        { errors.message && <span className="error">{errors.message}</span> }
                                    </div>
                                </div>
                                <div className="group-full">
                                    <button type="submit" className='submit'>
                                        <span>send message</span>
                                        <FiArrowRight />
                                    </button>
                                    {success && <span className="alert success">Email Sent</span>}
                                    {failure && <span className="alert error">Email failed... direct contact here  <a href={`mailto:${general.email}`}>{general.email}</a></span>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact