import React, { useState, useEffect } from "react";
import all from "../data/all.js";
import bag from "../data/bag.js";
import clothing from "../data/clothing.js";
import sport from "../data/sport.js";
import television from "../data/television";
import ProductCard from "../components/ProductCard.js";

import { FaExchangeAlt , FaRegTimesCircle } from "react-icons/fa";

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
       {/* <ToggleFilterButton /> */}
      <div className="CompContainer productContainerCont">
      <div className="absolute m-2 h-10/12 right-0 py-2 bg-gradient-to-r from-purple-600/50 to-blue-900 backdrop-blur-sm">
        <div className="w-full flex justify-between items-center">
          <div className="h5 h-full px-1 flex justify-center items-center">
               <FaExchangeAlt className="mx-1" />
               Filter
          </div>
          <div className="h5 h-full px-1 flex justify-center items-center">
                 <button type="button" className="btn" >
                     <FaRegTimesCircle />  
                 </button>
          </div>
        </div>
        <div className="w-full h-20 d-flex flex-column justify-content-center align-items-center py-2 border-dark border-top ">
          <label htmlFor="category" className="container font-semibold">
            Select Category
          </label>
          <select
            name="category"
            id="category"
            onChange={changeCategory}
            className="w-11/12 border border-secondary border-opacity-50 py-1"
          >
            <option value="all">all</option>
            <option value="bag">bags</option>
            <option value="clothing">clothings</option>
            <option value="sport">sports</option>
            <option value="television">televisions</option>
          </select>
        </div>
        <div className="w-full bg-white d-flex flex-column justify-content-center align-items-center border-top border-dark">
          <span className="font-semibold container">Price</span>
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



      {/*  products container  */}
        <div className="ProductContainer h-screen w-10/12 d-flex flex-wrap justify-content-center align-items-center" style={{overflow:"scroll"}}>
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
      
    </>
  );
};

export default AllProducts;
