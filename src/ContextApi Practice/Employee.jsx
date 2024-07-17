import React from 'react'


const Employee = ({use}) => {
  
  return (
    <div className='border'>
        <h2>{use.id}</h2>
        <h2>{use.name}</h2>
        <h2>{use.role}</h2>
      
    </div>
  )
}

export default Employee
