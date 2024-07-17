import React from 'react'
import{Link} from 'react-router-dom'

const about = () => {
  return (
    <>
     <div>about</div>
     <Link to='/about/guru'>1post</Link><br />
     <Link to ='/about/2'>2post</Link><br />
     <Link to ='/about/3'>3post</Link>
    </>
   
  )
}

export default about