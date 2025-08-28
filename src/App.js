import Events from './Components/Event/Events';
import { Input } from './Components/InputBoxTest/Input';
import Title from './Components/Title';
import './App.css';
import { Describe } from './Components/DescribeFunction/Describe';
import Functional from './Components/FunctionalCompMethodTesting/Functional';

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
      <Describe />
      <Functional />
    </div>
  );
}

export default App;
