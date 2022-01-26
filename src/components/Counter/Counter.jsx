import React, { useEffect, useRef, useState } from 'react';
import Count from '../Count';
import Decrement from '../Decrement';
import Increment from '../Increment';
import Styled from './Counter.styled';
import PropTypes from 'prop-types';
import { CounterProvider } from '../../contexts/CounterContext';

const Counter = ({
  value: controlledCount,
  onChange,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  children,
}) => {
  const [count, setCount] = useState(min);

  const isMounted = useRef(false);
  const isControlled = Boolean(controlledCount);

  const getCount = () => (isControlled ? controlledCount : count);

  const changeCount = (newCount) =>
    isControlled ? onChange(newCount) : setCount(newCount);

  const decrement = () => changeCount(Math.max(min, getCount() - 1));

  const increment = () => changeCount(Math.min(max, getCount() + 1));

  useEffect(() => {
    if (isMounted.current) {
      !isControlled && onChange && onChange(count);
    } else {
      isMounted.current = true;
    }
  }, [count]);

  const contextValue = {
    min,
    max,
    count: getCount(),
    decrement,
    increment,
  };

  return (
    <Styled.Counter>
      <CounterProvider value={contextValue}>{children}</CounterProvider>
    </Styled.Counter>
  );
};

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

Counter.Decrement = Decrement;
Counter.Increment = Increment;
Counter.Count = Count;

export default Counter;
