import React from 'react'
import "./Header.css"
import Home from './Top';
import Navbar from './Navbar';
import Search from './Search';

function Header({cartItem}) {
  return (
    <div>
      <Home/>
      <Search cartItem={cartItem}/>
      <Navbar/>
    </div>
  )
}

export default Header
