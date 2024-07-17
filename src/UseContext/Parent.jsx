import React, { useState,createContext } from 'react'
import {Getname} from './Getname'
import Displayname from './Dispaly'

export const Appcontext=  createContext(null);
const Parent = () => {
    const [name,setName]=useState('');
  return (
    <>

      <h1>enter your  name</h1>
      <Appcontext.Provider value={{name,setName}}>
      <Getname />
      <Displayname />

      </Appcontext.Provider>
      

    </>
  )
}

export default Parent