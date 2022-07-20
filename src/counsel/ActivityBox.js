import PropTypes from "prop-types";
import style from "./ActivityBox.module.css";

function ActivityBox({imageSrc, text}) {
    return (
        <div className={style.root}>
            <img src={imageSrc} className={style.picture} alt="activity"/>
            <p className={style.text}>{text}</p>
        </div>
    );
}

ActivityBox.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default ActivityBox;