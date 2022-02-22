import './sectionTitle.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const SectionTitle = ({title, description}) => {
    useEffect(()=>{
        Aos.init({duration:500, delay:100, once:true})
    }, []);

    return (
        <div className="section-title" data-aos='fade-up'>
            <h1 className="shadow">{title}</h1>
            <h2 className="title">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default SectionTitle