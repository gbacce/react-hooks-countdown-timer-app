import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import TimeInput from './TimeInput';
import DeploymentSchedule from './DeploymentSchedule';
import PauseResumeToggle from './PauseResumeToggle';
import CountdownRateSelection from './CountdownRateSelection';
import MessageDisplay from './MessageDisplay';
import styles from '../styles/CountdownTimer.module.css';

function CountdownTimer() {
    const countdownRates = [1, 1.5, 2];
    const offices = [
      {
        city: 'London',
        timezoneOffset: 0
      },
      {
        city: 'New York',
        timezoneOffset: -5
      },
      {
        city: 'Salt Lake City',
        timezoneOffset: -7
      }
    ];

    const [timerLength, setTimerLength] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [rate, setRate] = useState(countdownRates[0]);

    const setTimer = time => {
      setTimerLength(time);
      setTimeRemaining(time);
      setIsTimerActive(true);
    };

    useEffect(() => {
      let interval = null;
      if (isTimerActive && timeRemaining) {
        interval = setInterval(() => {
          setTimeRemaining(timeRemaining => timeRemaining - 1);
        }, 1000/rate);
      }
      return () => clearInterval(interval);
    }, [isTimerActive, timeRemaining, rate]);

    return (
      <div className={styles.container}>
        <div className={styles.countdownTimer}>
          <TimeInput setTimer={setTimer} setTimerLength={setTimerLength} />
          <MessageDisplay timeRemaining={timeRemaining} timerLength={timerLength} />
          <div className={styles.timerWrapper}>
            <Timer timeRemaining={timeRemaining} />
            <PauseResumeToggle isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive} timeRemaining={timeRemaining} />
          </div>
          <CountdownRateSelection countdownRates={countdownRates} setRate={setRate} />
        </div>
        <DeploymentSchedule offices={offices} timerLength={timerLength} />
      </div>
    );
  };

export default CountdownTimer;