import logo from './logo.svg';
import './App.css';
import Header from '../src/component/Header';
import Slideshow from '../src/component/SlideShow';
import image1 from './images/image-1.png';
import image2 from './images/image-2.png';
import image3 from './images/image-3.png';
import React from "react";

import 'aos/dist/aos.css';
import AOS from 'aos';
const images = [
  image1,
  image2,
  image3
]

function App() {

  

  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, []);
  return (
    <div className="App">
      <Header />
      <Slideshow images={images} autoPlay = {true} autoplayInterval={3000} />
    </div>
  );
}

export default App;
