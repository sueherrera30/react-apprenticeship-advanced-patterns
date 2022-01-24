import Counter from './components/Counter';

const App = () => {
  return (
    <Counter
      min={1}
      max={10}
      increment={{ size: 'large' }}
      count={{ style: { fontWeight: 'bold', padding: 10 } }}
    />
  );
};

export default App;
