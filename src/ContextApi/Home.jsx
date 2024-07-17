import React, { useContext, useState } from 'react'
import {faker} from '@faker-js/faker'
import SingleProduct from './SingleProduct'
import './Style.css';

 

faker.seed(10);
const Home = () => {
  
  
  const productsArray =[...Array(20)].map(()=>({
    id:faker.string.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image: faker.image.urlPicsumPhotos()

  }));
  const[products]= useState(productsArray);


 
  

  return (
    <div className='productcontainer'>
      {
        products.map((prod,i)=>(
          <SingleProduct product={prod}
         
          key={i}
          />
         
        ))
      }
    </div>
   
  )


     

 
  
}

export default Home