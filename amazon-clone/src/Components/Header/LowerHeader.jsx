import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css"

function LowerHeader() {
  return (
    <div className={classes.lower__container}>

      <ul>
        <li>
        <AiOutlineMenu />
        <p>All</p>
        </li>
        <li>Medical Care</li>
        <li>Groceries</li>
        <li>Best Seller</li>
        <li>New Releases</li>
        <li>Fashion</li>
        <li>Find a Gift</li>
        <li>Sell</li>


      </ul>




    </div>
  )
}

export default LowerHeader