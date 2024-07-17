import React from 'react'
import { useContext } from 'react'
import { userContext } from './Context/Usercontext'


const Header = () => {
  const{title}= useContext(userContext)
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}

export default Header