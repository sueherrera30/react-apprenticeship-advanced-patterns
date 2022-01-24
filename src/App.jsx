import Counter from './components/Counter';

const App = () => {
  return (
    <Counter min={1} max={10}>
      <Counter.Decrement />
      <Counter.Count style={{ fontWeight: 'bold', padding: 10 }} />
      <Counter.Increment size="large" />
    </Counter>
  );
};

export default App;
