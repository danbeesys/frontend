import style from "./Header.module.css";
import logo from "../logo.svg";
import {useEffect, useState} from "react";
import menu from "./menu.png";
import menu_cancel from "./menu_cancel.png";
import NavigationList from "./NavigationList";

function Header() {
    const [mobileMode, setMobileMode] = useState(false);
    function handleResize() {
        if (window.innerWidth < 922) {
            setMobileMode(true);
        } else {
            setMobileMode(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {window.addEventListener('resize', handleResize);}
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
                <header className={style.app__header__logo}>
                    <img src={logo} className={style.app__logo} alt="logo"/>
                    <h2 className={style.app__header__text}>단비 심리 상담 연구소</h2>
                </header>
                {mobileMode ? null: <NavigationList listing={"flex"}/>}
                {mobileMode ? <img src={String(menuImage)} className={style.toggle__img} onClick={onMenuClick}/> : null}
            </div>
            {mobileMode ? <NavigationList listing={"block"}/> : null}
        </div>);
}

export default Header;