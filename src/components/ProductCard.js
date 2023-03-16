import React from "react";
import { useStateValue } from "../redux/StateProvider";
import { FaShoppingBasket, FaHeart } from "react-icons/fa";
const ProductCard = (props) => {
  const [{user},dispatch] = useStateValue();
  const AddToCart = (e) => {
    e.target.
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
    <div className="md:w-1/5 w-4/5  bg-white py-1 shadow-lg shadow-indigo-500/50 text-center m-1 my-4">
      <div className="container productImgContainer">
        <img src={props.url} alt={props.fullName} />
      </div>
      <div className="body d-flex flex-column text-center">
        <strong className="bodyHeading">{props.fullName}</strong>
        <div className="d-flex justify-content-center align-items-center text-center">
          <span>{props.brand}</span>
          <span>{props.rating}</span>
        </div>
        <span>
          <strong className="">
            Rs : {(props.price * 84.4).toFixed(2)}
          </strong>
        </span>
      </div>
      <div className="productCartBtnGroup button-group mt-3">
        <button type="button" className="hover:animate-bounce border-0 me-1" onClick={AddToCart}>
          <FaShoppingBasket className=" me-1" />
        </button>
        <button type="button" className="border-0 ms-1" onClick={Saved}>
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
