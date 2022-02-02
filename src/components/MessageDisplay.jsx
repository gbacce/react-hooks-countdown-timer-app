import React from 'react';
import styles from '../styles/MessageDisplay.module.css';

const MessageDisplay = ( props ) => {
  const { timeRemaining, timerLength } = props;
  
  let message = '';
  if (timeRemaining > 0 && timeRemaining/timerLength < 0.5) {
    message = 'More than halfway there!'
  }
  if (timeRemaining === 0 && timerLength) {
    message = `Time's up!`
  }

  return (
    <div className={styles.messageDisplay}>
        { message }
    </div>
  );
};

export default MessageDisplay;