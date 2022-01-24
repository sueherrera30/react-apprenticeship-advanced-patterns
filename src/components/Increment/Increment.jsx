import React from 'react';
import Styled from './Increment.styled';
import { sizeType } from '../../types';
import { useCounter } from '../../contexts/CounterContext';

const Increment = ({ size }) => {
  const { increment, count, max } = useCounter();
  return (
    <Styled.Increment onClick={increment} size={size} disabled={count === max}>
      +
    </Styled.Increment>
  );
};

Increment.propTypes = {
  size: sizeType,
};

export default Increment;
