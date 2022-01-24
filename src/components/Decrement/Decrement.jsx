import React from 'react';
import { useCounter } from '../../contexts/CounterContext';

const Decrement = () => {
  const { decrement, count, min } = useCounter();
  return (
    <button onClick={decrement} disabled={count === min}>
      -
    </button>
  );
};

export default Decrement;
