import React, { useState } from 'react';
import Count from '../Count';
import Decrement from '../Decrement';
import Increment from '../Increment';
import Styled from './Counter.styled';
import PropTypes from 'prop-types';
import { sizeType } from '../../types';

const Counter = ({
  min,
  max,
  decrement: decrementProps,
  increment: incrementProps,
  count: countProps,
}) => {
  const [count, setCount] = useState(min ?? 0);

  const decrement = () => setCount((count) => Math.max(min ?? 0, count - 1));

  const increment = () =>
    setCount((count) => Math.min(max ?? Number.MAX_SAFE_INTEGER, count + 1));

  return (
    <Styled.Counter>
      <Decrement
        {...decrementProps}
        decrement={decrement}
        disabled={count === min}
      />
      <Count {...countProps} count={count} />
      <Increment
        {...incrementProps}
        increment={increment}
        disabled={count === max}
      />
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

export default Counter;
