import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeChartType} from "../../store/ChartStyle/actions";
import {getChartType} from "../../store/ChartStyle/selectors";
import styles from './RadioButton.module.scss';

const RadioButton = ({title, type}) => {
    const dispatch = useDispatch();
    const activeType = useSelector(getChartType);
    const isActive = activeType === type;
    const changeStyle = (e) => {
        dispatch(changeChartType(e.target.value))
    }

    return (
        <label className={isActive ?  `${styles.label} ${styles.activeLabel}` : `${styles.label}`}>
            <input
                onChange={(e) => changeStyle(e)}
                checked={isActive}
                type="radio"
                value={type}
                className={styles.radioBtn}
            />
            {title}
        </label>
    );
};

export default RadioButton;