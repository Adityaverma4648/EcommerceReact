import React, { useEffect, useState } from "react";
import { useStateValue } from "../redux/StateProvider";
import { FaShoppingBasket, FaHeart ,FaStar } from "react-icons/fa";
const ProductCard = (props) => {
  const [{user},dispatch] = useStateValue();

  const AddToCart = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        fullName: props.fullName,
        description: props.description,
        image: props.url,
        price: props.price,
        producedBy: props.producedBy,
        year: props.year,
        rating: props.rating,
        color: props.color,
        quantity: 1,
      },
    });
    e.preventDefault();
  };

  const Saved = (e) => {
    dispatch({
      type: "ADD_TO_SAVED",
      item: {
        id: props.id,
        fullName: props.fullName,
        description: props.description,
        image: props.url,
        price: props.price,
        producedBy: props.producedBy,
        year: props.year,
        rating: props.rating,
        color: props.color,
        quantity: 1,
      },
    });
    e.preventDefault();
  };

  return (
    <div className="w-96 h-2/3 bg-white py-4 shadow-lg shadow-indigo-500/50 text-center m-1 my-4">
      <div className="w-full h-4/5 flex justify-center items-center overflow-hidden">
        <img className="w-full h-auto" src={props.url} alt={props.fullName} />
      </div>

      <div className="h-1/5 py-2 bg-yellow-500 d-flex flex-column text-center">
              <div className="text-xl text-center font-bold w-full h-9 overflow-hidden">
                  {props.fullName}
              </div>
         <div className="px-2 flex flex-row justify-evenly items-center text-center">
          <div className="w-1/2 flex flex-col justify-center items-center font-semibold">
                 Brand : {props.brand}
      
          </div>
          <div className="w-1/2 flex flex-col justify-end items-center font-semibold" id="renderStar" >
                Ratings : {props.rating}
          </div>
        </div>
        <div className="w-full text-center text-xl font-bold" >
                Available Only At Rs : {(props.price * 84.4).toFixed(2)}
            </div>
        
      </div>
      <div className="productCartBtnGroup w-full flex justify-center items-center ">
        <button type="button" className="w-1/2 flex justify-center items-center py-3 text-white bg-gradient-to-r from-purple-900 to-purple-400 " onClick={AddToCart}>
            <FaShoppingBasket />
        </button>
        <button type="button" className=" w-1/2 flex justify-center items-center py-3 text-white bg-gradient-to-l from-purple-900 to-purple-400 " onClick={Saved}>
            <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
