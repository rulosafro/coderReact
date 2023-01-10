import './Navbar.sass'
import CustomizedBadges from "../CartWidget/CartWidget.jsx";
import { Link } from 'react-router-dom';
// @import '../../styles/_colorSass';

export const Navbar = ({bg = "#dddd"}) => {

    return (
        <header className='.navBarRam' style={{background: bg}}>
            <Link to="/" className='navBarRam__Logo'><h1 className='navBarRam__Logo'>RulosAfro Studio</h1></Link>
            <div></div>
            <div></div>
            <nav>
                <Link to="/what">What</Link>
                <Link to="/we">We</Link>
                <Link to="/do">Do</Link>
                <span>|</span>
                <Link to="/idealab">IdeaLab</Link>
                <span>|</span>
                <CustomizedBadges/>
            </nav>
        </header>
    )
}