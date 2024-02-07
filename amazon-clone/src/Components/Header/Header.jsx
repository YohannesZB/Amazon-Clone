import React from 'react'
import classes from './Header.module.css'
import { Link } from "react-router-dom"
import { ImLocation2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo section*/}
          <div className={classes.logo__container}>
          <a href="/">
            <img
             src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' 
             />
          </a>

          <div className={classes.delivery}>
          {/* delivery */}
          <span>
          <ImLocation2 size={25}/>
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
          </div>
        </div>
        <div className={classes.search}>
          {/* search */}
          <select name='' id=''>
          <option value="">All</option>
          </select>
          < input type='text' name='' id='' placeholder='search product' />
          <FaSearch size={25}/>
        </div>
        {/* right side link */}
        <div className={classes.order__container}>
          <div to="" className={classes.language}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png' alt='' />
            <select name='' id=''>
              <option value="">EN</option>
            </select>
          </div>
          {/* three components */}
          <a href='' >
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href='' >
            <p>returns</p>
            <span>& Orders</span>
          </a>
          {/* cart */}
          <a href='' className={classes.cart} >
          <BiCart size={25}/>
            <span>0</span>
          </a>




          </div>

        </div>




      </section>
    </section>
  )
}

export default Header