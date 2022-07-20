import style from "./NavigationList.module.css"
import PropTypes from "prop-types";

function NavigationList({flex, toggle}) {
    let clazz = "";
    if (flex) {
        clazz += style.vertical;
        if (toggle) {
            clazz += ` ${style.show}`;
        } else {
            clazz += ` ${style.hide}`;
        }
    } else {
        clazz += style.horizon;
    }

    return <div className={clazz}>
        <div className={style.elem}>소개</div>
        <div className={style.elem}>상담사 약력</div>
        <div className={style.elem}>찾아오시는 길</div>
        <div className={style.elem}>가나다바라마사아</div>
    </div>
}

NavigationList.propTypes = {
    flex: PropTypes.bool.isRequired,
    toggle: PropTypes.bool
}

NavigationList.defaultProps = {
    toggle: true
}

export default NavigationList;