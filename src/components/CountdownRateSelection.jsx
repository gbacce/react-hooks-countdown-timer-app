import React, { useState } from 'react';
import CountdownRateButton from './CountdownRateButton';

const CountdownRateSelection = ( props ) => {
  const { countdownRates, setRate } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const countdownRateButtons = countdownRates.map((rate, index) => {
    const active = (index === activeIndex);

    return <CountdownRateButton rate={rate} setRate={setRate} active={active} setIndex={() => setActiveIndex(index)} />
  });

  return (
    <div>
      { countdownRateButtons }
    </div>
  );
};

export default CountdownRateSelection;