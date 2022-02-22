import './menu.css'
import { animateScroll as scroll } from 'react-scroll';
import { MdClose, MdPerson, MdEmail } from 'react-icons/md';
import { useGlobalContext } from '../../context'
import { NavLink, Socials } from '../../snippets';
import { general } from '../../data';

function Menu() {
    const { isMenuOpen, closeMenu } = useGlobalContext();
    return (
        <div 
        className={"menu-wrapper "+ (isMenuOpen && "active")}
        >
            <div className={"menu "+ (isMenuOpen && "active")}>
                <div className="menu-inner">

                    <div className="hamburger" onClick={closeMenu}>
                        <MdClose />
                    </div>
                    <ul>
                        <li>
                            <span onClick={() => { scroll.scrollToTop();closeMenu()}}>
                                home
                            </span>
                        </li>
                        <li>
                            <NavLink name="services" />
                        </li>
                        <li>
                            <NavLink name="portfolio" />
                        </li>
                        <li>
                            <NavLink name="contact" />
                        </li>
                    </ul>
                    <div className="menu-socials">
                        <Socials title="find with me" />
                        <div className="itemContainer">
                            <MdPerson className="icon" />
                            <span><a href={`tel:${general.phone}`}>{general.phone}</a></span>
                        </div>
                        <div className="itemContainer">
                            <MdEmail className="icon"/>
                            <span><a href={`mailto:${general.email}`}>{general.email}</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu