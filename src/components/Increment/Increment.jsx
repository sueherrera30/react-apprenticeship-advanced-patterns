import React from 'react';
import Styled from './Increment.styled';
import { sizeType } from '../../types';
import { useCounterContext } from '../../contexts/CounterContext';
import PropTypes from 'prop-types';

const Increment = ({ size, onClick }) => {
  const { count, max } = useCounterContext();
  return (
    <Styled.Increment onClick={onClick} size={size} disabled={count === max}>
      +
    </Styled.Increment>
  );
};

Increment.propTypes = {
  size: sizeType,
  onClick: PropTypes.func.isRequired,
};

export default Increment;
