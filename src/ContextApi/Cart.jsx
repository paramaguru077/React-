import React, { useContext, useEffect ,useState} from 'react'
import SingleProduct from './SingleProduct'
import { Card } from './Context';

const Cart = () => {

  const{cart}=useContext(Card);
   const[total,setTotal]= useState();

   useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price),0))
   },[cart]);

  return (
    <div>
      <span style={{fontSize:'30px'}}>My cart</span>
      <br />
      <span style={{fontsize:'30px'}}> Total: Eru {total}</span>
      <div className='productcontainer'>
        {
          cart.map((prod,i)=>(
            <SingleProduct product={prod}
            key={i} 
             />
          ))

        }

      </div>
    </div>
  )
}

export default Cart