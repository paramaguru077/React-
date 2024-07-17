import React from 'react'
import Employee from './Employee'
import { useContext } from 'react'
import { userContext } from './Context/Usercontext'

const Employees = () => {
  const{user}=useContext(userContext)
 
  return (
    <div>
      {
        user.map((use,i)=>(
            <Employee use = {use}
            key={i} />
        ))
      }
    </div>
  )
}

export default Employees
