import {useState} from 'react';

const useCounter = ({ initial, min = 0, max = Number.MAX_SAFE_INTEGER }) => {
    const [count, setCount] = useState(initial);

    const handleCounterChange = (newCount) => setCount(newCount);

    const decrement = () => setCount(Math.max(min, count- 1));

    const increment = () => setCount(Math.min(max, count + 1));

    return { decrement, increment, min, max, count, handleCounterChange}
};

export default useCounter;