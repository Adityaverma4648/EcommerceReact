import React, { useState , useEffect } from "react";
import { FaShoppingBasket, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductCard = (props) => {

  const [rating, setRating] = useState([]);
  

  const AddToCart = (e) => {

    e.preventDefault();
  };

  const Saved = (e) => {

    e.preventDefault();
  };

   const RatingFetcher= () =>{
      let array = new Array(props.rating);
      for (let i = 0; i < array.length; i++) {
              array[i] = i+1;
      }
      return array;
   }
   useEffect(()=>{
      setRating(RatingFetcher());
   },[rating])

  return (
    <>
    <div className="lg:w-1/5 md:w-2/5 w-4/5 h-1/2 bg-orange-300 py-2 shadow-md text-center m-4 flex flex-col justify-center items-center rounded-lg relative">

     <div className="w-full 
       flex justify-center items-center bg-white overflow-hidden relative" style={{height : "80%" }}>
             
             {/* image block */}
             <div className="relative flex justify-center items-center bg-white" style={{height : "100%" , width : "100%"}} >
                <img src={props.url} alt={props.fullName} style={{ width : "100%"}} />
             </div>

      </div>

      <div className="h-2/6 p-2 w-full bg-orange-700 d-flex flex-column justify-evenly items-center text-white">
         <div className="w-full text-lg text-center font-bold">
                  {props.fullName}
         </div>
         <div className="w-full flex flex-row justify-between items-center">
          <div className="flex justify-center items-center font-semibold" >
                 {rating.map((d , index)=>{
                    return <FaStar key={index} color="#FFD700" />
                }) } 
          </div>

          <div className="flex ">
              <div className="font-semibold mx-1" >
              Color 
              </div>
             <div className="h-6 w-6 rounded-full" style={{backgroundColor : props.color}} ></div>
          </div>
        </div>
        <div className="w-full text-center text-md font-semibold" >
                Only at <strong className="text-lg">{(props.price * 84.4).toFixed(0)}</strong> Rs/-
        </div>
        <div className="absolute top-0 my-3 w-11/12 flex justify-center items-center">
             <button type="button" className="w-10 h-10 flex justify-start p-2 items-center bg-orange-600/80 border-end rounded-l-md" onClick={Saved}>
                <FaHeart className="text-xl animate-pulse text-white" />
             </button>

             <button type="button" className="flex justify-end p-2 items-center bg-orange-600/80 rounded-r-md" onClick={AddToCart}>
               Add To Cart
             </button>
        </div>
      </div>
    </div>
   </>
  );
};

export default ProductCard;
