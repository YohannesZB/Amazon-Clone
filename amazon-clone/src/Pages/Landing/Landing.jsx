import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import CarouselEffect from '../../Components/Carousel/CarouselEffect';
import Category from '../../Components/Category/Category'
import Product from '../../Components/Products/Product'

function Landing() {
  return (
    <div>
      <LayOut>
        <CarouselEffect />
        <Category />
        <Product/>
      </LayOut>


    </div>
  )
}

export default Landing