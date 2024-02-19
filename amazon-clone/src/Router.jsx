import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Land from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Payment from './Pages/Payment/Payment'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
const stripePromise = loadStripe(
  "pk_test_51OjC2qH1acQSpIwb5eSzLOmHB6hqlEnmIkSbBKUJaUaP6OIWBoh6G37ewI11pQzZcKrcve8YSypyb9Uz057DR4da002bWprFwE"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/payment' element={

        <ProtectedRoute 
                    msg={"You must log-in to pay "} redirect={"/payment"}>
                        <Elements stripe={stripePromise}>
                            <Payment />
                        </Elements>
                    </ProtectedRoute>
                } />
                <Route path='/orders' element={
                    <ProtectedRoute 
                    msg={"You must log-in first to access your orders "} redirect={"/orders"}>
                            <Orders />
                    </ProtectedRoute>
               } />
        <Route path='/orders' element={<Orders />} />
        <Route path='/category/:categoryName' element={<Results />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:categoryName' element={<Results/>} />
        {/* <Route path='/cart' element={<Cart />} /> */}



      </Routes>
    </Router>
  )
}

export default Routing