import React from 'react';
import {useBasketTotal} from '../reducer'; 
import {useStateValue} from "../redux/StateProvider";
import {Link} from "react-router-dom";
import CartItem from '../components/CartItem';
import EmptyCard from '../components/EmptyCard';

const Cart = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='w-screen h-screen py-4 bg-gray-400 flex flex-col items-center justify-center'>
         <div className='w-screen flex flex-col items-center justify-start overflow-y-scroll' id='cartScrollView' >
         {basket.length? basket.map((ar)=>{
           return <CartItem key={ar.id}  id = {ar.id} fullName= {ar.fullName} description= {ar.description} image= {ar.image} price= {ar.price} producedBy= {ar.producedBy} year= {ar.year} rating= {ar.rating} color= {ar.color} quantity={ar.quantity} />
         }):<EmptyCard theme="Cart" />}
         </div>
    </div>
  )
}

export default Cart;