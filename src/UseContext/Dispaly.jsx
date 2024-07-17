import React from 'react'
import { Appcontext } from './Parent'
import { useContext } from 'react'

const Dispaly = () => {
    const{name}=useContext(Appcontext)
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default Dispaly
