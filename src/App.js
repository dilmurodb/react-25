import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMoreData from './components/load-more-data/LoadMoreData';

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />
      {/* Random Color Generator Component */}
      <RandomColor />
      {/* Start Rating Component */}
      <StarRating numOfStars={10} />
      {/* Image Slider Component */}
      <ImageSlider
                  url = {'https://picsum.photos/v2/list'}
                  limit = {'10'}
                  page = {'1'} />
      {/* Load More Data Component */}
      <LoadMoreData
                  url = {'https://dummyjson.com/products'}
                  limit = {'20'}
                  skip = {'0'} />
    </div>
  );
}

export default App;
