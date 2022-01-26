import React from 'react';
import { useCounterContext } from '../../contexts/CounterContext';

const Decrement = () => {
  const { decrement, count, min } = useCounterContext();
  return (
    <button onClick={decrement} disabled={count === min}>
      -
    </button>
  );
};

export default Decrement;
