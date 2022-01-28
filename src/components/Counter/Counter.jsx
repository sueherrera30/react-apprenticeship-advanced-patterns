import React, { useRef, useEffect } from 'react';
import Styled from './Counter.styled';
import PropTypes from 'prop-types';
import CounterContext from '../../context';

const Counter = ({
  value: count,
  onChange,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  children,
}) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if(isMounted.current){
       onChange &&onChange(count);
    } else {
      isMounted.current = true;
    }
  }, [count]);

  const counterContextValue = {
    count,
    min,
    max,
  };

  return (
    <CounterContext.Provider value={counterContextValue}>
      <Styled.Counter>
        { children }
      </Styled.Counter>
    </CounterContext.Provider>
  );
};

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  count: PropTypes.shape({
    style: PropTypes.object,
  }),
};

export default Counter;
