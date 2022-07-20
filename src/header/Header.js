import style from "./Header.module.css";
import logo from "../logo.svg";
import {useEffect, useState} from "react";
import menu from "./menu.png";
import menu_cancel from "./menu_cancel.png";
import NavigationList from "./NavigationList";
import {Link} from "react-router-dom";

function Header() {
    const [mobileMode, setMobileMode] = useState(false);
    function handleResize() {
        if (window.innerWidth < 922) {
            setToggled(false);
            setMenuImage(menu);
            setMobileMode(true);
        } else {
            setToggled(true);
            setMenuImage(menu_cancel);
            setMobileMode(false);
        }
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);
    const [menuImage, setMenuImage] = useState(menu);
    const [toggled, setToggled] = useState(false);

    function onMenuClick() {
        if (toggled) {
            setMenuImage(menu);
            setToggled(false);
        } else {
            setMenuImage(menu_cancel);
            setToggled(true);
        }
    }
    return (
        <div className={style.app__header__box}>
            <div className={style.app__header__plain__box}>
                <Link to={"/"} className={style.app_header__banner}>
                    <header className={style.app__header__logo}>
                    <img src={logo} className={style.app__logo} alt="logo"/>
                    <h2>단비 심리 상담 연구소</h2>
                    </header>
                </Link>
                {mobileMode ? null: <NavigationList flex={false}/>}
                {mobileMode ? <img src={String(menuImage)} className={style.toggle__img} onClick={onMenuClick} alt=" ⁞ "/> : null}
            </div>
            {mobileMode ? <NavigationList flex={true} toggle={toggled}/> : null}
        </div>);
}

export default Header;