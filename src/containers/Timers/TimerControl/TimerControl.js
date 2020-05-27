import React from 'react';
import Button from '../../../../components/UI/Button/Button';
import classNames from './TimerControl.css';

const timerControl = (props) => {
    return (
        <Button
            className={classNames.TimerControl}
            variant="round"
            clicked={props.clicked}
            label={props.value === 'minus' ? '-' : '+'} />
     );
}

export default timerControl;
