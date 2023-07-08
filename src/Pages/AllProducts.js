import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard.js";

import { FaFilter } from "react-icons/fa";

const AllProducts = ({props}) => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
       axios.post('http://localhost:7000/api/allProducts').then((res) =>
       {           
        setProducts(res.data);
      });
      axios.post('http://localhost:7000/api/allBrands').then((res) =>
    {           
     setBrands(res.data);
   });
  }, []);
  return (
    <>

       {/* <ToggleFilterButton /> */}
      <div className="w-screen h-screen overflow-auto flex flex-col justify-center items-center py-4">

         <div className="h-20 w-11/12 md:w-11/12 lg:w-10/12 flex justify-center items-center bg-orange-300 shadow-md" >
            
            <div>
              <select name="brand">

              </select>
            </div>
            
            
            <div className="flex justify-center items-center text-white">
               <FaFilter className="mx-1" />
               Filters
            </div>
         </div>

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
