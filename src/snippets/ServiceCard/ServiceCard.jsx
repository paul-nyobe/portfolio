import './serviceCard.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const ServiceCard = ({title, desc, icon, delay}) => {
    useEffect(()=>{
        Aos.init({duration:500, once:true})
    }, []);
    return (
        <div className="serviceCard" data-aos='fade-up' data-aos-delay={delay}>
            <div className="inner">
                <div className="icon"> {icon}</div>
                <div className="content">
                    <h4 className="title">{title}</h4>
                    <p className="description">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard