import React from 'react'
import "./Pages.css";
import Home from '../components/mainpage/home/Home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Topcate from '../components/top/Topcate';
import Arrivals from '../components/newArrivals/Arrivals';
import Discount from '../components/discount/Discount';
import Shop from '../components/shop/Shop';
import Annocument from '../components/announcement/Announcement';
import Wrapper from '../components/wrapper/Wrapper';
function Pages({productItems, addToCart, cartItem, shopItems}) {
  return (
<>
    <Home cartItem={cartItem}/>
    <FlashDeals productItems = {productItems} addToCart={addToCart}/>
    <Topcate/>
    <Arrivals/>
    <Discount/>
    <Shop shopItems={shopItems} addToCart={addToCart}/>
    <Annocument/>
    <Wrapper/>
</>
  )
}

export default Pages
