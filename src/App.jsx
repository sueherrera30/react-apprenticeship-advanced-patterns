import { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(1);

  const handleCounterChange = (newCount) => setCount(newCount);

  return (
    <Counter value={count} onChange={handleCounterChange} min={1} max={10}>
      <Counter.Decrement />
      <Counter.Count style={{ fontWeight: 'bold', padding: 10 }} />
      <Counter.Increment size="large" />
    </Counter>
  );
};

export default App;
