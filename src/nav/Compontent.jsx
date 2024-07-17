import React from 'react'
import './Com.css'
import {Link} from 'react-router-dom';
const Compontent = () => {
  return (
    <div>
      <header>
        <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/user'>user</Link></li>
            <li><Link to='/contact'>contact</Link></li>
        </nav>
      </header>
    </div>
  )
}

export default Compontent
