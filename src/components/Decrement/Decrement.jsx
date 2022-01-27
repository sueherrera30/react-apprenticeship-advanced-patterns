import React, { useContext } from 'react';
import CounterContext from '../../context';
const Decrement = () => {
  const value = useContext(CounterContext);
  const { count, min } = value;
  return (
    <button onClick={value.decrement} disabled={count === min}>
      -
    </button>
  );
};

export default Decrement;
