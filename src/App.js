import './App.css';
import Hero from './components/Hero/Hero.js';
import TravelBlog from './components/TravelBlog/TravelBlog.js'
import TravelData from './TravelData.js';

function App() {
  const cards = TravelData.map((item) => {
    return (
      <TravelBlog
      key = {item.id}
      heading = {item.placeHeading}
      img1 = {item.placeImg1}
      img2 = {item.placeImg2}
      img3 = {item.placeImg3}
      description = {item.placeDescription}
      />
    );
  })
  
  return (
    <div>
      <Hero />
      <div className="sections">{cards}</div>
    </div>
  );
}

export default App;
