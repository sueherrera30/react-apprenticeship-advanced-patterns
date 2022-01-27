import React, { useContext } from 'react';
import Styled from './Increment.styled';
import PropTypes from 'prop-types';
import { sizeType } from '../../types';
import CounterContext from '../../context';

const Increment = ({ increment, size, disabled }) => {
  const value = useContext(CounterContext);
  return (
    <Styled.Increment onClick={increment} size={size}  disabled={value.count === value.max}>
      +
    </Styled.Increment>
  );
};

Increment.propTypes = {
  increment: PropTypes.func.isRequired,
  size: sizeType,
  disabled: PropTypes.bool,
};

export default Increment;
