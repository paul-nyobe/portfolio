import { Link } from 'react-scroll';
import { useGlobalContext } from '../context'

const NavLink = ({name}) => {
    const { closeMenu } = useGlobalContext();
    return (
        <Link 
        activeClass="active" 
        to={name} spy={true} 
        smooth={true} 
        duration={500} 
        onClick={closeMenu} 
        >
            {name}
        </Link>
    )
}

export default NavLink