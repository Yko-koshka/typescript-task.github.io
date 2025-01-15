import Component from './components/props';

const App = () => {
  return (
    <main>
      <Component name="peter" id={123}>
        <h2>hello world</h2>
      </Component>
      <Component name="peter" id={123} />
    </main>
  );
};

export default App;
