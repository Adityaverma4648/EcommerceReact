import React,{useState} from 'react';
import {Link} from "react-router-dom";
import SavedItem from '../components/SavedItem';

const Saved = () => {

  const [saved, setSaved] = useState([])

  return (
    <div className='w-screen h-screen flex flex-wrap justify-center items-center'>
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