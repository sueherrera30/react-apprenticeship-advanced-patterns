import React, { useContext } from 'react';

const CounterContext = React.createContext();

const CounterProvider = ({ value, children }) => {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounterContextContext = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error(
      'useCounterContextContext must be used within a CounterProvider'
    );
  }

  return context;
};

export { CounterProvider, useCounterContextContext };
