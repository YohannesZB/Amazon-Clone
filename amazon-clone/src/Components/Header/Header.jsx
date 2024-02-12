import React, { useContext } from 'react'
import classes from './Header.module.css'
import { Link } from "react-router-dom"
import { ImLocation2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from "../../Utility/firebase"

function Header() {
const [{user, basket},dispatch]= useContext(DataContext)
const totalItem = basket?.reduce((amount, item)=>amount + item.amount,0)
console.log(totalItem, "basket total item")


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
          <FaSearch size={40}/>
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
          <Link to ='' >
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>
          {/* orders */}
          <a href='' >
            <p>returns</p>
            <span>& Orders</span>
          </a>
          {/* cart */}
          <Link to='/cart' className={classes.cart} >
          <BiCart size={35}/>
            <span>{totalItem}</span>
          </Link>




          </div>

        </div>






      </section>
      <LowerHeader />
    </section>
  )
}

export default Header