import Counter from './components/Counter';
import { useCounter } from './hooks/useCounter';

const AVAILABLE = 5;
const App = () => {
  const { min, max, count, decrement, increment } = useCounter({
    initial: 1,
    min: 1,
    max: 10,
  });

  const handleIncrementClick = () => {
    count < AVAILABLE && increment();
  };

  return (
    <Counter value={count} min={min} max={max}>
      <Counter.Decrement onClick={decrement} />
      <Counter.Count style={{ fontWeight: 'bold', padding: 10 }} />
      <Counter.Increment size="large" onClick={handleIncrementClick} />
    </Counter>
  );
};

export default App;
