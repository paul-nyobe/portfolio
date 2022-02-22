import './header.css';
import { useRef, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { MdPerson, MdEmail  } from 'react-icons/md';
import { general } from '../../data'

import { useGlobalContext } from '../../context'

const Header = () => {
    const { openMenu } = useGlobalContext();
    const headerRef = useRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 0){
                headerRef.current.classList.add('is-scrolling');
            }else{
                headerRef.current.classList.remove('is-scrolling');
            }
        });
    }, [])

    return (
        <div className="header" ref={headerRef}>
            <div className="wrapper">
                <div className="header-left">
                    <div className="logo" onClick={() => { scroll.scrollToTop() }}>
                        PaulFolio.
                    </div>
                    <div className="itemContainer">
                        <MdPerson className="icon" />
                        <span><a href={`tel:${general.phone}`}>{general.phone}</a></span>
                    </div>
                    <div className="itemContainer">
                        <MdEmail className="icon"/>
                        <span><a href={`mailto:${general.email}`}>{general.email}</a></span>
                    </div>
                </div>
                <div className="header-right">
                    <div className="hamburger" onClick={openMenu}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header