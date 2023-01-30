import React from "react";
import { FaShoppingBasket, FaHeart } from "react-icons/fa";

const ProductCard = (props) => {
  return (
    <div className="ProductCard text-center m-1 my-4">
      <div className="container productImgContainer">
        <img src={props.url} alt={props.fullName} />
      </div>
      <div className="body d-flex flex-column text-center">
        <strong className="text-white bodyHeading">{props.fullName}</strong>
        <div className="d-flex justify-content-center align-items-center text-center">
          <span className="text-light">{props.brand}</span>
          <span className="text-light">{props.rating}</span>
        </div>
        <span>
          <strong className="text-white">
            Rs : {(props.price * 84.4).toFixed(2)}
          </strong>
        </span>
      </div>
      <div className="productCartBtnGroup button-group mt-3">
        <button type="button" className="border-0 me-1">
          <FaShoppingBasket className="tada me-1" />
          AddToCart
        </button>
        <button type="button" className="border-0 ms-1">
          <FaHeart className="tada me-1" />
          Save
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
