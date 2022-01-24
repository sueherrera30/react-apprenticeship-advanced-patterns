import React from 'react';
import PropTypes from 'prop-types';
import { useCounter } from '../../contexts/CounterContext';

const Count = ({ style }) => {
  const { count } = useCounter();
  return <span style={style}>{count}</span>;
};

Count.propTypes = {
  style: PropTypes.object,
};

export default Count;
