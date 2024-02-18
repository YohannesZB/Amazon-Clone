import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import CarouselEffect from '../../Components/Carousel/CarouselEffect';
import Category from '../../Components/Category/Category'
import Product from '../../Components/Products/Product'
import Footer from '../../Components/Footer/Footer'

function Landing() {
  return (
    <div>
      <LayOut>
        <CarouselEffect />
        <Category />
        <Product/>
        <Footer />
      </LayOut>


    </div>
  )
}

export default Landing