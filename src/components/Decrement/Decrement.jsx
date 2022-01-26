import React from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import PropTypes from 'prop-types';

const Decrement = ({ onClick }) => {
  const { count, min } = useCounterContext();
  return (
    <button onClick={onClick} disabled={count === min}>
      -
    </button>
  );
};

Decrement.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Decrement;
