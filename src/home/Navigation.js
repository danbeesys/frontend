import {Link} from "react-router-dom";
import style from "./Navigation.module.css";

function NavMenu({menuText, linkTo}) {
    return <div className={style.naviBox}>
        <Link to={linkTo} className={style.naviText}>{menuText}</Link>
    </div>
}

function Navigation() {
    return (
        <nav className={style.navigation}>
            <NavMenu linkTo="/" menuText="활동" />
            <NavMenu linkTo="/adviser" menuText="상담사" />
            <NavMenu linkTo="/" menuText="오시는길" />
            <NavMenu linkTo="/" menuText="가나다라마" />
        </nav>
    );
}

export default Navigation;