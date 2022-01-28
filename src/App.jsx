import Counter from './components/Counter';
import useCounter from './utils/useCount';
import Count from './components/Count/Count';
import Decrement from './components/Decrement/Decrement';
import Increment from './components/Increment/Increment';
const App = () => { 
  const { count,  decrement, increment, min, max } = useCounter({
    initial: 1,
    min: 1,
    max: 10,
  });
  return (
    <Counter value={count} min={min} max={max}>
    <Decrement decrement={decrement} />
      <Count />
      <Increment increment={increment} />
  </Counter>
  );
};


export default App;
