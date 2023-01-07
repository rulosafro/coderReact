import './Navbar.sass'
import CustomizedBadges from "../CartWidget/CartWidget.jsx";

export const Navbar = ({}) => {

    return (
        <header className='.navBarRam'>
            <h1 className='navBarRam__Logo'>RulosAfro Studio</h1>
            <div></div>
            <div></div>
            <nav>
                <a href="#">What</a>
                <a href="#">We</a>
                <a href="#">Do</a>
                <span>|</span>
                <a href="#">IdeaLab</a>
                <span>|</span>
                <CustomizedBadges/>
            </nav>
        </header>
    )
}