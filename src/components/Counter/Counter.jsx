import React, { useState } from 'react';
import Count from '../Count';
import Decrement from '../Decrement';
import Increment from '../Increment';
import Styled from './Counter.styled';
import PropTypes from 'prop-types';
import { sizeType } from '../../types';
import CounterContext from '../../context';

const Counter = ({
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  decrement: decrementProps,
  increment: incrementProps,
  count: countProps,
}) => {
  const [count, setCount] = useState(min ?? 0);

  const decrement = () => setCount((count) => Math.max(min, count - 1));

  const increment = () => setCount((count) => Math.min(max, count + 1));

  const counterContextValue = {
    decrement,
    increment,
    count,
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
