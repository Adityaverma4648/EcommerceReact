import React from 'react';
import {FaFilter} from 'react-icons/fa';

const ToggleFilterButton = () => {

    const toggleFilterProducts = (e) =>{
        var FilterProducts = document.getElementById('FilterProducts');
        var FilterTogglerButton = document.getElementById('FilterTogglerButton');
        if(FilterProducts.style.display === "block"){
          FilterProducts.style.display = "none";
          FilterTogglerButton.style.display = "block";
        }else{
          FilterProducts.style.display = "block";
          FilterTogglerButton.style.display = "none";
        }
    } 

  return (
    <button className='end-0 bottom-0 p-1 w-8 m-3 absolute md:hidden flex justify-center rounded-5xl bg-gradient-to-r from-purple-900 to-indigo-700 items-center' id='FilterTogglerButton' style={{zIndex:99999999}} onClick={(e)=>toggleFilterProducts(e)} >
        <FaFilter color='white' className='w-full h-full' />
    </button>
  )
}

export default ToggleFilterButton