import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />
      {/* Random Color Generator Component */}
      <RandomColor />
      {/* Start Rating Component */}
      <StarRating numOfStars={10} />
    </div>
  );
}

export default App;
