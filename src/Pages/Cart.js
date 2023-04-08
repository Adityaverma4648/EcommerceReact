import React from 'react';
import {useBasketTotal} from '../reducer'; 
import {useStateValue} from "../redux/StateProvider";
import {Link} from "react-router-dom";
import CartItem from '../components/CartItem';

const Cart = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='CompContainer cartCompContainer bg-danger justify-content-center'>
         {basket.map((ar)=>{
           return <CartItem key={ar.id}  id = {ar.id} fullName= {ar.fullName} description= {ar.description} image= {ar.image} price= {ar.price} producedBy= {ar.producedBy} year= {ar.year} rating= {ar.rating} color= {ar.color} quantity={ar.quantity} />
         })}
    </div>
  )
}

export default Cart;