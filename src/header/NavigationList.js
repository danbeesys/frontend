import style from "./NavigationList.module.css"

function NavigationList({listing}) {
    return <div style={{
        display: listing,
    }} className={style.root}>
        <div className={style.elem}>소개</div>
        <div className={style.elem}>상담사 약력</div>
        <div className={style.elem}>찾아오시는 길</div>
        <div className={style.elem}>가나다바라마사아</div>
    </div>
}

export default NavigationList;