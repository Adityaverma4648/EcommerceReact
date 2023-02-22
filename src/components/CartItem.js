import React from "react";

const CartItem = (props) => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center bg-white mb-1"
      id={props.id}
    >
      <div className="cartItemImgContainer col-sm-5 ">
        <img src={props.image} alt={props.fullName} className="col-sm-4" />
      </div>
      <div className="body col-sm-7 d-flex">
        <h5>{props.fullName}</h5>
        <span>{props.brand}</span>
      </div>
    </div>
  );
};

export default CartItem;
