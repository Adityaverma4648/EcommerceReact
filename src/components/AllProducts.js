import React, { useState, useEffect } from "react";
import all from "../data/all.js";
import ProductCard from "./ProductCard.js";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const productFetcher = () => {
    const myProducts = all;
    setProducts(myProducts);
    console.log(products);
  };

  useEffect(() => {
    productFetcher();
  });

  return (
    <div className="CompContainer productContainerCont">
      <div className="ProductContainer container d-flex justify-content-center align-items-center flex-wrap">
        {products.map((ar) => {
          return (
            <ProductCard
              key={ar.key}
              id={ar.id}
              fullName={ar.fullName}
              url={ar.url}
              brand={ar.brand}
              year={ar.year}
              price={ar.price}
              rating={ar.rating}
              color={ar.color}
              quantity={ar.quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
