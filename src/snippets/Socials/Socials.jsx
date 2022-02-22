import './socials.css';
import { social } from '../../data'

const Socials = ({title}) => {
    return (
        <div className="social-area">
            <div className="name">{title}</div>
            <div className="social-icons">
                {social.map(s => <a key={s.id} rel="noreferrer" target="_blank" href={s.url}>{s.icon}</a>)}
            </div>
        </div>
    )
}

export default Socials