import React , {useState  , useEffect} from 'react'
import {FaHeart , FaStar , FaShoppingBasket  } from "react-icons/fa";

const SavedItem = (props) => {

  const [rating, setRating] = useState([]);
  
  const RatingFetcher= () =>{
    let array = new Array(props.rating);
    for (let i = 0; i < array.length; i++) {
            array[i] = i+1;
    }
    return array;
 }
 useEffect(()=>{
    setRating(RatingFetcher());
 },[rating])

  return (
    <div className="lg:w-1/5 md:w-2/5 w-4/5 bg-white py-4 shadow-lg shadow-indigo-500/50 text-center m-1 relative flex flex-col justify-between items-center" style={{minHeight : "50vh"}}>
    <div className="w-full h-
    8/12 flex justify-center items-center overflow-hidden">
           {/*  button absolute */}
           <div className="w-11/12 py-4 flex absolute top-0 justify-between items-center z-50">
              <button type="button" className="w-10 h-10 flex justify-start p-2 items-center border-2 border-black rounded-full">
                 <FaHeart color="red" className="text-xl" />
              </button>

              <button type="button" className="w-10 h-10 flex justify-end p-2 items-center border-2 border-black rounded-full">
                 <FaShoppingBasket className="text-xl" />
              </button>
             
           </div>
           {/* image block */}
           <div className="w-full h-full relative flex justify-center items-center" >
              <img className="w-full" src={props.url} alt={props.fullName} />
           </div>
    </div>

    <div className="h-4/12 py-2 bottom-0 absolute w-full bg-gray-100 d-flex flex-column text-center">
       <div className="w-full text-md text-center font-bold">
                {props.fullName}
       </div>
       <div className="px-2 flex flex-row justify-evenly items-center text-center">
        <div className="w-1/2 flex justify-center items-center font-semibold" id="renderStar" >
               {rating.map((d)=>{
                  return <FaStar color="rgba(0,0,0,0.4)" />
              }) } 
        </div>
      </div>
      <div className="w-full text-center text-md font-semibold" >
              Price : {(props.price * 84.4).toFixed(0)} Rs
          </div>
      
    </div>
  </div>
  )
}

export default SavedItem