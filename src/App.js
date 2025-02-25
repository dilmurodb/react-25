import './App.css';
import Accordion from './components/accordion/Accordion';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMoreData from './components/load-more-data/LoadMoreData';
import TreeView from './components/tree-view/TreeView';
import QrCodeGenerator from './components/qr-code-generator/QrCodeGenerator';
import LightDarkMode from './components/light-dark-mode/LightDarkMode';
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator';
import CustomTabs from './components/custom-tabs/CustomTabs';
import CustomModalPopup from './components/custom-modal-popup/CustomModalPopup';
import ProfileFinder from './components/github-profile-finder/ProfileFinder';

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
      {/* Tree View Component */}
      <TreeView />
      {/* QR Code Generator Component */}
      <QrCodeGenerator />
      {/* Light Dark Mode Component */}
      <LightDarkMode />
      {/* Scroll Indicator Component */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
      {/* Custom Tabs Component */}
      <CustomTabs />
      {/* Custom Modal Popup Component */}
      <CustomModalPopup url={'https://dummyjson.com/users'}/>
      {/* GitHub Profile Finder Component */}
      <ProfileFinder />
    </div>
  );
}

export default App;
