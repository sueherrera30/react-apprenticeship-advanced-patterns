import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CounterContext from '../../context';
const Count = ({ style }) => {
  const value = useContext(CounterContext);
  return <span style={style}>{value.count}</span>;
};

Count.propTypes = {
  style: PropTypes.object,
};

export default Count;
