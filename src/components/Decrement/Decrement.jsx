import React from 'react';
import { useCounterContextContext } from '../../contexts/CounterContext';

const Decrement = () => {
  const { decrement, count, min } = useCounterContextContext();
  return (
    <button onClick={decrement} disabled={count === min}>
      -
    </button>
  );
};

export default Decrement;
