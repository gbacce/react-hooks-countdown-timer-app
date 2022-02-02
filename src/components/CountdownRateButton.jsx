import React from 'react';
import styles from '../styles/CountdownRateButton.module.css';

const CountdownRateButton = ( props ) => {
  const { rate, setRate, active, setIndex } = props;

  const handleClick = () => {
    setIndex();
    setRate(rate);
  };

  return (
    <button className={active ? styles.activeCountdownRateBtn : styles.countdownRateBtn} onClick={handleClick}>
      <span>{`${rate}X`}</span>
    </button>
  );
};

export default CountdownRateButton;