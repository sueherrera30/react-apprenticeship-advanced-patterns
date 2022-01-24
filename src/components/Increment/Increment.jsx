import React from 'react';
import Styled from './Increment.styled';
import PropTypes from 'prop-types';
import { sizeType } from '../../types';

const Increment = ({ increment, size, disabled }) => {
  return (
    <Styled.Increment onClick={increment} size={size} disabled={disabled}>
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
