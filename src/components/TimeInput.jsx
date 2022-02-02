import React, { useState } from 'react';
import styles from '../styles/TimeInput.module.css';

const TimeInput = ( props ) => {
  const { setTimer } = props;
  const [time, setTime] = useState('');

  const validateInput = input => {
    if ((/^[0-9\b]+$/.test(input) || input === '') && input.toString().length < 3) {
      setTime(input) 
    }
  };

  const handleClick = () => {
    if (time > 0) {
      const totalSeconds = time * 60;
      setTimer(totalSeconds);
      setTime('');
    }
  };

  return (
    <div className={styles.timerLengthInput}>
      <input
        type = "text"
        value = {time}
        onChange = {e => validateInput(e.target.value)}
        placeholder = "Enter time in minutes"
        className={styles.timerLengthInputField}
        />
        <button className={styles.startTimerBtn} onClick={handleClick}>Start</button>
    </div>
  );
};

export default TimeInput;