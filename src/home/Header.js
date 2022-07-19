import style from "./Header.module.css";
import logo from "../logo.svg";
import Navigation from "./Navigation";

function Header() {
    return (
    <div className={style.app__header__box}>
        <header className={style.app__header__logo}>
            <img src={logo} className={style.app__logo} alt="logo" />
            <h2 className={style.app__header__text}>단비 심리 상담 연구소</h2>
        </header>
        <Navigation />
    </div>);
}

export default Header;