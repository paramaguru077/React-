import React, { useState } from 'react'

import { createContext } from 'react'
  

export const Card =createContext();
const Context = ({children}) => {
    const [cart,setCart]=useState([]);
  return (
   <Card.Provider value={{cart,setCart}}>
    {children}
   </Card.Provider>
  )
}

export default Context
