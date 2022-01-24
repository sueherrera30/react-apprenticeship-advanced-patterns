import React, { useState } from 'react';
import Count from '../Count';
import Decrement from '../Decrement';
import Increment from '../Increment';
import Styled from './Counter.styled';
import PropTypes from 'prop-types';
import { sizeType } from '../../types';
import { CounterProvider } from '../../contexts/CounterContext';

const Counter = ({ min = 0, max = Number.MAX_SAFE_INTEGER, children }) => {
  const [count, setCount] = useState(min ?? 0);

  const decrement = () => setCount((count) => Math.max(min, count - 1));

  const increment = () => setCount((count) => Math.min(max, count + 1));

  const value = { min, max, count, decrement, increment };
  return (
    <Styled.Counter>
      <CounterProvider value={value}>{children}</CounterProvider>
    </Styled.Counter>
  );
};

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  increment: PropTypes.shape({
    size: sizeType,
  }),
  count: PropTypes.shape({
    style: PropTypes.object,
  }),
};

Counter.Decrement = Decrement;
Counter.Increment = Increment;
Counter.Count = Count;

export default Counter;
