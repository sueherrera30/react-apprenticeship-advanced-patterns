import React from 'react';
import PropTypes from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

const Count = ({ style }) => {
  const { count } = useCounterContext();
  return <span style={style}>{count}</span>;
};

Count.propTypes = {
  style: PropTypes.object,
};

export default Count;
