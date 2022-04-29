import React from 'react';
import RadioButton from "../RadioButton/RadioButton";
import styles from './RadioBtnBlock.module.scss';

const RadioBtnBlock = () => {

    const chartTypes = [
        {title: 'Bar chart', type: 'bar'},
        {title: 'Line chart', type: 'line'},
        {title: 'Pie chart', type: 'pie'},
        {title: 'Doughnut chart', type: 'doughnut'},
        {title: 'Radial chart', type: 'radar'},
    ]

    const renderButtons = chartTypes.map((btnData, index) => {
        const {title, type} = btnData;
        return <RadioButton key={index} title={title} type={type}/>

    })

    return (
        <div className={styles.radioBtnWrapper}>
            {renderButtons}
        </div>
    );
};

export default RadioBtnBlock;