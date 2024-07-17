import React, { useContext } from 'react'
import {Card} from './Context'

const SingleProduct = ({product}) => {
  const{cart,setCart}= useContext(Card)
  function handleRemove(prod){
    const newProd = cart.filter((p)=>p.id!==prod.id);
    setCart(newProd);
    
  }
  return (
    <div className='products'>
        <img src={product.image} alt={product.name} />
        <div className="productDesc">
            <span  style={{fontWeight:"800"}}>{product.name}</span> 
            <span> £{product.price.substring(0,3)}</span>
        </div>
        {cart.includes(product)
        ?( <button className='add' onClick={()=> handleRemove(product)}>Remove</button>):
        <button className='add' onClick={()=> setCart([...cart,product])}>Add to cart</button>}


       
    </div>
  )
}

export default SingleProduct