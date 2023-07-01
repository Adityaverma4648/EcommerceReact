import React, { useRef, useState , useEffect , Suspense } from 'react'

//  import three js canvass here
import { Canvas} from '@react-three/fiber';
//  import three js helpers
import {OrbitControls , Preload , useGILF} from "@react-three/fiber/";

const Category = () => {
  return (
    <div className='w-full md:h-1/2 h-4/6 flex justify-center items-center'>Category</div>
  )
}

export default Category;