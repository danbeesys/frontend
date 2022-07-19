import {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Navigation.module.css";
import menu from "./menu.png";

function NavMenu({menuText, linkTo}) {
    return (<div className={style.naviBox}>
        <Link to={linkTo} className={style.naviText}>{menuText}</Link>
    </div>);
}

function ToggleNav() {
    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
        console.log("toggled");
    }
    return <div className={style.toggleNav}>
        <img className={style.toggleImg} src={menu} onClick={toggleMenu} alt="  ⁝  "/>
        <div>
            <ul className={isOpen ? style.show__menu : style.hide__menu}>
                <NavMenu linkTo="/" menuText="활동" />
                <NavMenu linkTo="/adviser" menuText="상담사" />
                <NavMenu linkTo="/" menuText="오시는길" />
                <NavMenu linkTo="/" menuText="가나다라마" />
            </ul>

        </div>
    </div>;
}

function PlainNav() {
    return (
        <nav className={style.navigation}>
            <NavMenu linkTo="/" menuText="활동" />
            <NavMenu linkTo="/adviser" menuText="상담사" />
            <NavMenu linkTo="/" menuText="오시는길" />
            <NavMenu linkTo="/" menuText="가나다라마" />
        </nav>
    );
}

function Navigation() {
    return (
        <div>
            <PlainNav />
            <ToggleNav />
        </div>
    );
}

export default Navigation;