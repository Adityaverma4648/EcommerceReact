import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard.js";

import { FaExchangeAlt , FaRegTimesCircle } from "react-icons/fa";

const AllProducts = ({props}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
       axios.post('/api/allProducts').then((res) =>
       {           
        setProducts(res.data);
      });
  }, [products]);



  return (
    <>

       {/* <ToggleFilterButton /> */}
      <div className="w-screen h-screen overflow-auto flex justify-center items-center">
      {/*  products container  */}
        <div className="ProductContainer h-screen w-10/12 d-flex flex-wrap justify-content-center align-items-center" style={{overflow:"scroll"}}>
          {products?.map((ar,index) => {
            return (
              <ProductCard
                key={index}
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
