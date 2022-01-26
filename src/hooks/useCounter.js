import { useState } from 'react';

const useCounter = ({ initial, min = 0, max = Number.MAX_SAFE_INTEGER }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => setCount((count) => Math.max(min, count - 1));

  const increment = () => setCount((count) => Math.min(max, count + 1));

  return { min, max, count, decrement, increment };
};

export { useCounter };
