import React from 'react';
import styles from '../styles/Timer.module.css';

const Timer = ( props ) => {
  const { timeRemaining } = props;
  
  const minutes = Math.floor(timeRemaining/60);
  const seconds = Math.floor(timeRemaining % 60);
  const secondsPlaceHolder = seconds < 10 ? '0' : '';

  let timerStyle = '';
  if (timeRemaining && timeRemaining <= 20) {
    timerStyle = styles.warning;
  }
  if (timeRemaining && timeRemaining <= 10) {
    timerStyle = styles.blinking
  }

  return (
    <div className={styles.timer}>
      <span className={timerStyle}>
        {minutes}:{secondsPlaceHolder}{seconds}
      </span>
    </div>
  );
};

export default Timer;