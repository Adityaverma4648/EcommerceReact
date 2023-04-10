import React, { useState , useEffect } from "react";
import { useStateValue } from "../redux/StateProvider";
import { FaShoppingBasket, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const [{user},dispatch] = useStateValue();
  const [ratings, setRatings] = useState([])

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
    <div className="lg:w-1/5 md:w-2/5 w-4/5 h-1/2 bg-white py-4 shadow-lg shadow-indigo-500/50 text-center m-1 relative flex flex-col justify-between items-center">
      <div className="w-full h-
      8/12 flex justify-center items-center overflow-hidden">
             {/*  button absolute */}
             <div className="w-11/12 py-4 flex absolute top-0 justify-between items-center z-50">
                <button type="button" className="w-10 h-10 flex justify-start p-2 items-center border-2 border-black rounded-full" onClick={Saved}>
                   <FaHeart color="red" className="text-xl" />
                </button>

                <button type="button" className="w-10 h-10 flex justify-end p-2 items-center border-2 border-black rounded-full" onClick={AddToCart}>
                   <FaShoppingBasket className="text-xl" />
                </button>
               
             </div>
             {/* image block */}
             <div className="w-full h-full relative flex justify-center items-center" >
                <img className="w-full" src={props.url} alt={props.fullName} />
             </div>
      </div>

      <div className="h-4/12 bottom-0 absolute w-full bg-gray-100 d-flex flex-column text-center">
         <div className="w-full text-xl text-center font-bold">
                  {props.fullName}
         </div>
         <div className="px-2 flex flex-row justify-evenly items-center text-center">
          <div className="w-1/2 flex flex-col justify-end items-center font-semibold" id="renderStar" >
                {props.rating}

                {/* {ratings.map((d)=>{
                    return <FaStar />
                }) } */}
          </div>
        </div>
        <div className="w-full text-center text-xl font-bold" >
                Available Only At Rs : {(props.price * 84.4).toFixed(0)}
            </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
