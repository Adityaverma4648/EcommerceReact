import React,{useState} from 'react';
import {useBasketTotal} from '../reducer'; 
import {useStateValue} from "../redux/StateProvider";
import {Link} from "react-router-dom";
import SavedItem from '../components/SavedItem';

const Saved = () => {
  const [{ saved, user }, dispatch] = useStateValue();

  return (
    <div className='CompContainer Saved bg-danger justify-content-center'>
    {saved.map((ar)=>{
      return <SavedItem  
                key = {ar.id}
                id = {ar.id}
                fullName= {ar.fullName}
                description= {ar.description}
                image= {ar.image}
                price= {ar.price}
                producedBy= {ar.producedBy}
                year= {ar.year}
                rating= {ar.rating}
                color= {ar.color}
                quantity={ar.quantity}
               />
    })}
</div>
  )
}

export default Saved