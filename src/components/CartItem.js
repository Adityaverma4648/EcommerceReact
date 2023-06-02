import React,{useState , useEffect} from "react";
import { FaPlus ,FaMinus, FaTrash } from "react-icons/fa";
import { useStateValue } from "../redux/StateProvider";

const CartItem = (props) => {
  
  const [{user},dispatch] = useStateValue();
  const [quan, setQuantity] = useState(props.quantity);

  useEffect(() => {
    dispatch({
      type: "UPDATE_QUANTITY",
      item: {
        id: props.id,
        quantity: quan,
      },
    });
  }, [quan]);

  const increment = () =>{
      setQuantity(quan+1);
  }
  const decrement = () =>{
    if(quan > 0){
      setQuantity(quan-1);
    }
  }
  const remove = (e) =>{
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: props.id,
      },
    });
    e.preventDefault();
  }
  return (
    <div
      className="w-11/12 md:w-8/12 lg:h-1/3 h-1/4 bg-white mb-1 flex justify-start items-center"
      id={props.id}
    >
        <div className="h-full w-1/3 flex justify-center items-center overflow-hidden">
          <img src={props.image} alt={props.fullName} className="w-10/12 h-auto select-auto" />
        </div>
        <div className="h-full w-2/3 p-2 flex flex-col justify-start items-center">
          <div className="w-10/12 flex justify-between items-center mb-1" >
            <span className="md:text-xl text-md font-semibold">
              {props.fullName}
            </span>
            <button type="button" className="border-2 flex justify-center items-center border-black px-1 py-2 text-sm" onClick={(e)=>{remove(e)}} >
              <FaTrash className="mx-1" />
              Remove
            </button>
          </div>
          <div className="w-10/12 flex  items-center justify-between" id="pricingAndNoOfItem" >
              <div className="" >
                Available only at :
                <strong className="mx-1">
                {props.quantity * (props.price*84.4).toFixed(0) }
                </strong>
                 Rs
              </div> 
              <div className="flex" >
                 <button type="button" className="text-xl mx-2" onClick={(e)=>decrement()} >
                     <FaMinus color="rgba(0,0,0,0.4)" />
                 </button>
                 <div className="text-2xl font-semibold mx-2" >
                   {props.quantity}
                 </div>
                 <button type="button" className="text-xl mx-2" onClick={(e)=>{increment()}} >
                    <FaPlus  color="rgba(0,0,0,0.4)" />
                 </button>
              </div>
          </div>
        </div>
      </div>
  );
};

export default CartItem;
