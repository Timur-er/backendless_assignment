import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeChartDataOperation} from "../../store/ChartData/operations";
import styles from './InputComponent.module.scss';


const InputComponent = ({label, axis, storeValue}) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setValue(storeValue)
    }, [storeValue])

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(changeChartDataOperation(e.target.value, axis))
        }
    }

    const handelMouse = () => {
        dispatch(changeChartDataOperation(value, axis))
    }

    return (
        <label className={styles.inputWrapper}>
            {label}
            <input
                type="text"
                value={value}
                onChange={(e) => handleInput(e)}
                onKeyPress={(e) => handleEnterPress(e)}
                onMouseLeave={handelMouse}
                className={styles.input}
            />
        </label>
    );
};

export default InputComponent;