import React, { useContext } from 'react';

const CounterContext = React.createContext();

const CounterProvider = ({ value, children }) => {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }

  return context;
};

export { CounterProvider, useCounter };
