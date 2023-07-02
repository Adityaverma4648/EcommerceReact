import React, { useRef, useState , useEffect , Suspense } from 'react';

import { Link } from 'react-router-dom';

import bag from "../Img/136-1363855_shopping-bag-png-free-download-shopping-bag-transparent.png"

const Category = () => {

  const data = [{
    id : 1,
    categoryName : "Bags",
    imageURL : bag,
    availableStocks : 0
  } , {
    id : 2,
    categoryName : "Bags",
    imageURL : bag,
    availableStocks : 0
  }, {
    id : 3,
    categoryName : "Bags",
    imageURL : bag,
    availableStocks : 0
  }, {
    id : 4,
    categoryName : "Bags",
    imageURL : bag,
    availableStocks : 0
  } , {
    id : 5,
    categoryName : "Bags",
    imageURL : bag,
    availableStocks : 0
  },{
    id : 6,
    categoryName : "Bags",
    imageURL : bag,
    availableStocks : 0
  }]

  return (
    <div className='w-screen md:h-1/2 h-4/5 flex flex-col justify-center items-center'>
        <div className='lg:w-8/12 md:w-11/12 w-full md:h-1/5 h-28  flex md:justify-start justify-center items-center font-bold text-2xl text-center' >
          Please shop something from popular categories !
        </div>
        <div className='md:h-3/5 h-fit lg:w-10/12 md:w-11/12 w-full flex flex-wrap justify-center items-center ' >
             {data.map((d)=>{
              return <Link className='lg:w-1/4 md:w-1/3 w-8/12 md:h-1/3 flex justify-center items-center md:m-2 m-1 bg-gray-100 p-3 cursor-pointer text-decoration-none text-black' to={"/" + d.categoryName }><div key={d.id} className='w-full h-full flex justify-evenly items-center' >
                         <div className='h-4/5 flex justify-center items-center' >
                            <img className='h-10 w-auto' src={d.imageURL} alt={d.categoryName}  />
                         </div>

                         <div className='h-4/5' >
                              <div className='font-semibold text-xl' >
                                 {d.categoryName}
                              </div>
                              <div>
                                Available stocks are : 
                                {d.availableStocks}
                              </div>
                         </div>

                     </div>
                     </Link>
             })}
        </div>
       
    </div>
  )
}

export default Category;