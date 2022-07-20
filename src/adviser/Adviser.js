import Header from "../header/Header";
import picture from "./pic.png";
import style from "./Adviser.module.css";

function Adviser() {
    return <div>
        <Header />
        <div className={style.main__box}>
            <img src={picture} className={style.picture} alt="logo"/>
            <ul>
                <p className={style.content}>약력</p>
                <div className={style.list}>가나다마바사 아자차타가파하</div>
                <div className={style.list}>가나다마바사 아자차타가파하</div>
                <div className={style.list}>가나다마바사 아자차타가파하</div>
                <div className={style.list}>가나다마바사 아자차타가파하</div>
            </ul>
        </div>
    </div>
}

export default Adviser;
