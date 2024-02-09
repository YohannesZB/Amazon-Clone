import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Land from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProdutDetail from './Pages/ProductDetail/ProductDetail'
import Payment from './Pages/Payment/Payment'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/signin' element={<Auth />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/category/:categoryName' element={<Results />} />
        <Route path='/products/:productId' element={<ProdutDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart' element={<Cart />} />



      </Routes>
    </Router>
  )
}

export default Routing