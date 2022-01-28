import React, { useState, useRef, useEffect } from 'react';
import Count from '../Count';
import Decrement from '../Decrement';
import Increment from '../Increment';
import Styled from './Counter.styled';
import PropTypes from 'prop-types';
import { sizeType } from '../../types';
import CounterContext from '../../context';

const Counter = ({
  value: controlledValue,
  onChange,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  decrement: decrementProps,
  increment: incrementProps,
  count: countProps,
}) => {
  const isMounted = useRef(false);
  const isControlled = Boolean(controlledValue);
  const getCount = () => (isControlled ? controlledValue : count);
  const changeCount = (newCount) => (isControlled ? onChange(newCount) : setCount(newCount) )

  const [count, setCount] = useState(min ?? 0);

  const decrement = () => changeCount(Math.max(min, getCount() - 1));

  const increment = () => changeCount(Math.min(max, getCount() + 1));

  useEffect(() => {
    if(isMounted.current){
      !isControlled && onChange &&onChange(count);
    } else {
      isMounted.current = true;
    }
  }, [count]);

  const counterContextValue = {
    decrement,
    increment,
    count: getCount(),
    min,
    max,
  };

  return (
    <CounterContext.Provider value={counterContextValue}>
      <Styled.Counter>
        <Decrement
          {...decrementProps}
          decrement={decrement}
        />
        <Count {...countProps} count={count} />
        <Increment
          {...incrementProps}
          increment={increment}
        />
      </Styled.Counter>
    </CounterContext.Provider>
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

export default Counter;
