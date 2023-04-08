import React, { useState, useEffect } from "react";
import all from "../data/all.js";
import bag from "../data/bag.js";
import clothing from "../data/clothing.js";
import sport from "../data/sport.js";
import television from "../data/television";
import ProductCard from "../components/ProductCard.js";

import { FaExchangeAlt , FaRegTimesCircle } from "react-icons/fa";

const AllProducts = ({searchKey}) => {
  const [products, setProducts] = useState([0]);
  const [search, setSearch] = useState("");


  const productFetcher = (myCategories) => {
    if (myCategories) {
      var myProducts = myCategories;
      setProducts(myProducts);
    }
  };
  useEffect(() => {
    productFetcher(all);
  }, []);
  const changeCategory = (value) => {
    if (value) {
      productFetcher(all);
    } else if (value === "bag") {
      productFetcher(bag);
    } else if (value === "clothing") {
      productFetcher(clothing);
    } else if (value === "sport") {
      productFetcher(sport);
    } else if (value === "television") {
      productFetcher(television);
    }
  };
  useEffect(() => {
     changeCategory(search);
  },[search])
  return (
    <>

       {/* <ToggleFilterButton /> */}
      <div className="CompContainer productContainerCont">
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
