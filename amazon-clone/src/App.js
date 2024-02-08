import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Carousel from './Components/Carousel/CarouselEffect'
import Category from './Components/Category/Category';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      {/* <Product/> */}
     
    </div>
  );
}

export default App;
