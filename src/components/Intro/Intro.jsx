import './intro.css';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { Scroll } from '../../snippets';
import { general as settings } from '../../data'

const Intro = () => {
    const textRef = useRef();
    const {name, skills, desc, introImg} = settings;
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay:  500,
            backSpeed:  20,
            strings: skills,
        })
    }, [skills])
    return (
        <div className="intro" id="intro">
            <div className="intro-inner">
                <div className="intro-left">
                    <div className="intro-left-bg"></div>
                    <img src={introImg} alt="paul nyobe" />
                </div>
                <div className="intro-right">
                    <div className="intro-right__wrapper">
                        <div className="intro-hello">WELCOME TO MY WORLD</div>
                        <h1 className="intro-name">{`HI, I'm ${name}`} <br />a  <span ref={textRef}></span></h1>
                        <div className="intro-desc">
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
                <Scroll name="intro-left-scroll" scrollTo="services" />
            </div>
        </div>
    )
}

export default Intro