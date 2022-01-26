import React, { useEffect, useRef, useState } from 'react';
import Count from '../Count';
import Decrement from '../Decrement';
import Increment from '../Increment';
import Styled from './Counter.styled';
import PropTypes from 'prop-types';
import { CounterProvider } from '../../contexts/CounterContext';

const Counter = ({
  value: count,
  onChange,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  children,
}) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      onChange && onChange(count);
    } else {
      isMounted.current = true;
    }
  }, [count]);

  const contextValue = {
    min,
    max,
    count,
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
