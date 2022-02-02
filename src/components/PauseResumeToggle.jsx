import React from 'react';
import PauseIconSVG from '../assets/PauseIconSVG.svg';
import PlayIconSVG from '../assets/PlayIconSVG.svg';
import styles from '../styles/PauseResumeToggle.module.css';

const PauseResumeToggle = ( props ) => {
  const { isTimerActive, setIsTimerActive, timeRemaining } = props;

  const icon = timeRemaining && !isTimerActive ? <img src={PlayIconSVG} className={styles.icon} alt="play" /> : <img src={PauseIconSVG} className={styles.icon} alt="pause" />;

  const toggleCountdown = () => {
    if (timeRemaining > 0) {
      setIsTimerActive(!isTimerActive);
    }
  };

  return (
    <div className={timeRemaining ? styles.activePauseResumeToggle : styles.pauseResumeToggle} onClick={toggleCountdown}>
      { icon }
    </div>
  );
};

export default PauseResumeToggle;