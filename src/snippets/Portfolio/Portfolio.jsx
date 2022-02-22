import './portfolio.css';
import 'aos/dist/aos.css';
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Aos from 'aos';
import { useEffect } from 'react';

const Portfolio = ({url, img, name, category, tasks, delay}) => {
    useEffect(()=>{
        Aos.init({duration:500, once:true})
    }, []);
    return (
        <div className="portfolioCard" data-aos='fade-up' data-aos-delay={delay} >
            <div className="inner">
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noreferrer"><img src={img} alt={name} /></a>
                </div>
                <div className="content">
                    <div className="category-list">{category}</div>
                    <h4 className="title"><a href={url} target="_blank" rel="noreferrer">{name}<FiArrowUpRight/></a></h4>
                    <div className="tasks">
                        {tasks.map((t,i) => {
                            return (
                                <div key={i} className='check'>
                                    <FiCheck />
                                    <p>{t}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio