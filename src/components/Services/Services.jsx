import './services.css';
import { services } from '../../data'
import { SectionTitle, ServiceCard } from '../../snippets';

const Services = () => {
    
    return (
        <div className="services section-gap" id="services">
            <div className="container">
                <SectionTitle title='services' description='what I do'/>
                <div className="services-wrapper">
                    {services.map(serv => <ServiceCard key={serv.id} {...serv} />)}
                </div>
            </div>
        </div>
    )
}

export default Services