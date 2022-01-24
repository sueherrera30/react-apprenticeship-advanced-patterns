import React from 'react';
import PropTypes from 'prop-types';
import { useCounterContextContext } from '../../contexts/CounterContext';

const Count = ({ style }) => {
  const { count } = useCounterContextContext();
  return <span style={style}>{count}</span>;
};

Count.propTypes = {
  style: PropTypes.object,
};

export default Count;
