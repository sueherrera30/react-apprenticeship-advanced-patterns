import { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(1);
  const handleCounterChange = (newCount) => {
    setCount(newCount)
  }
  return (
    <Counter
      min={1}
      max={10}
      onChange={handleCounterChange}
      value={count}
      // increment={{ size: 'large' }}
      // count={{ style: { fontWeight: 'bold', padding: 10 } }}
    />
  );
};

export default App;
