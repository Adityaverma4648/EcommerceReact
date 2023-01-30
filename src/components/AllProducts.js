import React, { useState, useEffect } from "react";
import all from "../data/all.js";
import bag from "../data/bag.js";
import clothing from "../data/clothing.js";
import sport from "../data/sport.js";
import store from "../data/store.js";
import television from "../data/television";
import ProductCard from "./ProductCard.js";

const AllProducts = () => {
  const [products, setProducts] = useState([0]);
  const productFetcher = (myCategories) => {
    if (myCategories) {
      var myProducts = myCategories;
      setProducts(myProducts);
    }
    // console.log(products);
  };

  const changeCategory = (e) => {
    if (e.target.value === "all") {
      productFetcher(all);
    } else if (e.target.value === "bag") {
      productFetcher(bag);
    } else if (e.target.value === "clothing") {
      productFetcher(clothing);
    } else if (e.target.value === "sport") {
      productFetcher(sport);
    } else if (e.target.value === "store") {
      productFetcher(store);
    } else if (e.target.value === "television") {
      productFetcher(television);
    }
  };
  useEffect(() => {
    productFetcher();
  });
  return (
    <>
      <div className="container-fluid position-absolute d-flex justify-content-end align-items-center bg-danger">
        <div className="border">
          <label htmlFor="category">Select Category</label>
          <select name="category" id="category" onChange={changeCategory}>
            <option value="all">all</option>
            <option value="bag">bags</option>
            <option value="clothing">clothings</option>
            <option value="store">stores</option>
            <option value="sport">sports</option>
            <option value="television">televisions</option>
          </select>
        </div>
      </div>
      <div className="CompContainer productContainerCont">
        <div className="ProductContainer container d-flex justify-content-center align-items-center flex-wrap">
          {products?.map((ar) => {
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
    </>
  );
};

export default AllProducts;
