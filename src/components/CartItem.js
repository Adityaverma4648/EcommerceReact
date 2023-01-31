import React from "react";

const CartItem = (props) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      id={props.id}
    >
      <div className="cartItemImgContainer">
        <img src={props.url} alt={props.fullName} />
      </div>
      <div className="body">
        <h5>{props.fullName}</h5>
        <span>{props.brand}</span>
      </div>
    </div>
  );
};

export default CartItem;
