import React, { useContext } from 'react';

const CounterContext = React.createContext();

const CounterProvider = ({ value, children }) => {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error('useCounterContext must be used within a CounterProvider');
  }

  return context;
};

export { CounterProvider, useCounterContext };
