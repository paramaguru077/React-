import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
import { Card } from './Context' 
const Header = () => {
  const {cart} = useContext(Card);
  return (
    <div>
      <span className='header'>React Context Api </span>
      <ul className='nav'>
        <li ><Link to='/'>Home Page</Link></li>
        <li ><Link to='/cart'>Cart {cart.length} </Link></li>
      </ul>
    </div>
  )
}

export default Header
