import Events from './Components/Event/Events';
import { Input } from './Components/InputBoxTest/Input';
import Title from './Components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        Learn React
        </p>
      </header>
      <Title />
      <Input />
      <Events />
    </div>
  );
}

export default App;
