import React, { useState } from "react";
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
    <div className="lg:w-1/5 md:w-2/4 w-4/5 bg-white py-4 shadow-lg shadow-indigo-500/50 text-center m-1 my-4">
      <div className="container productImgContainer">
        <img src={props.url} alt={props.fullName} />
      </div>
      <div className="body d-flex flex-column text-center">
        <strong className="text-xl">{props.fullName}</strong>
        <div className="d-flex flex-col justify-content-center align-items-center text-center">
          <span className="font-semibold text-xl" >
              {props.brand}
          </span>
          <span>
              {props.rating}
          </span>
        </div>
        <span>
          <strong>
            Rs : {(props.price * 84.4).toFixed(2)}
          </strong>
        </span>
      </div>
      <div className="productCartBtnGroup w-full mt-3 flex justify-center items-center ">
        <button type="button" className="w-1/2 hover:animate-bounce flex justify-center items-center py-3 text-white bg-gradient-to-r from-purple-900 to-purple-400" onClick={AddToCart}>
            <FaShoppingBasket />
        </button>
        <button type="button" className="hover:animate-bounce w-1/2 flex justify-center items-center py-3 text-white bg-gradient-to-l from-purple-900 to-purple-400" onClick={Saved}>
            <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
