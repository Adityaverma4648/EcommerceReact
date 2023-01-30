import React, { useState, useEffect } from "react";
import all from "../data/all.js";
import ProductCard from "./ProductCard.js";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const productFetcher = () => {
    setProducts(all);
    console.log(products);
  };

  useEffect(() => {
    productFetcher();
  });

  return (
    <div className="CompContainer">
      <div className="ProductContainer">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
