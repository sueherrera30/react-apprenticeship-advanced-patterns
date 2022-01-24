import React from 'react';
import PropTypes from 'prop-types';

const Decrement = ({ decrement, disabled }) => {
  return (
    <button onClick={decrement} disabled={disabled}>
      -
    </button>
  );
};

Decrement.propTypes = {
  decrement: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Decrement;
