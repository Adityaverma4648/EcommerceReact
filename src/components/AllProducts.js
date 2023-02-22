import React, { useState, useEffect } from "react";
import all from "../data/all.js";
import bag from "../data/bag.js";
import clothing from "../data/clothing.js";
import sport from "../data/sport.js";
import store from "../data/store.js";
import television from "../data/television";
import ProductCard from "./ProductCard.js";

import { FaExchangeAlt } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState([0]);
  const productFetcher = (myCategories) => {
    if (myCategories) {
      var myProducts = myCategories;
      setProducts(myProducts);
    }
  };
  useEffect(() => {
    productFetcher(all);
  }, []);
  const changeCategory = (e) => {
    if (e.target.value === "all") {
      productFetcher(all);
    } else if (e.target.value === "bag") {
      productFetcher(bag);
    } else if (e.target.value === "clothing") {
      productFetcher(clothing);
    } else if (e.target.value === "sport") {
      productFetcher(sport);
      // } else if (e.target.value === "store") {
      //   productFetcher(store);
    } else if (e.target.value === "television") {
      productFetcher(television);
    }
  };

  return (
    <>
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
                desc={ar.description}
              />
            );
          })}
        </div>
      </div>
      <div className="allProdFilterationCont col-sm-2 position-absolute end-0 d-flex flex-column justify-content-end align-items-center mt-2 me-2">
        <div className="h5">
          <FaExchangeAlt />
          <span className="h5 px-1">Filter</span>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center py-2 border-dark border-top">
          <label htmlFor="category" className="h5 container">
            Select Category
          </label>
          <select
            name="category"
            id="category"
            onChange={changeCategory}
            className="container"
          >
            <option value="all">all</option>
            <option value="bag">bags</option>
            <option value="clothing">clothings</option>
            <option value="sport">sports</option>
            <option value="television">televisions</option>
          </select>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center border-top border-dark">
          <span className="h5 container ">Price</span>
          <fieldset>
            <label htmlFor="price" className="px-2">
              0-50K
            </label>
            <input type="checkbox" name="price0K/50K" className="px-2 py-2" />
          </fieldset>
          <fieldset>
            <label htmlFor="price" className="px-2">
              50K-100K
            </label>
            <input type="checkbox" name="price50K/100K" className="px-2 py-2" />
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
