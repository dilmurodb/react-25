import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/random-color/RandomColor';

function App() {
  return (
    <div className="App">
      {/* Accordion App */}
      <Accordion />
      {/* Random Color Generator App */}
      <RandomColor />
    </div>
  );
}

export default App;
