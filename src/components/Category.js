import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

const Category = ({isAdmin , token }) => {

  const [visibility, setVisibility] = useState(false);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const [data, setData] = useState([]);

  const onChangeLogo = (e) =>{
    setLogo(e.target.files[0]);
  }

  const onChangeImage = (e) =>{
    setImage(e.target.files[0]);
  }

  const onInputChange = (e) =>{
    setName(e.target.value);
  }

  const handleVisibility = () =>{
     setVisibility(false);            
  }


  useEffect(()=>{
    axios.post("http://localhost:7000/api/getCategory").then((res)=>{
        setData(res.data)
    })
    console.log(data);
  },[data])

  return (

    // modal to create data for category
    <>
    {visibility && <div className='h-screen w-screen flex items-center justify-center absolute top-0'  >
             <div className='h-full w-full bg-black/20 z-20 flex justify-center items-center backdrop-blur-sm relative' onClick={handleVisibility}></div>
             <div className='bg-white z-50 h-3/5 xl:w-1/3 lg:w-3/5 md:w-10/12 w-11/12 flex flex-col justify-evenly items-center absolute' id='formContainer'  >
                 <div className='text-xl font-semibold text-black' >
                     Add Category
                 </div>
                 <form method='post' action="http://localhost:7000/api/addCategory/" className='w-full h-1/2 flex flex-col items-center justify-evenly' encType='multipart/form-data' >
                     <div className='w-8/12 flex flex-col justify-center items-start my-2'>
                      <label htmlFor="name" className='font-semibold text-xl' >Enter Category Name : </label>
                      <input type="text" className='w-full p-2 border border-gray-600' name='name' placeholder='Add Category' onChange={onInputChange} />
                     </div>

                     <div className='w-8/12 flex flex-col justify-center items-start my-2'>
                      <label htmlFor="logo" className='font-semibold text-xl' >
                        Enter Category Logo
                      </label>

                      <input type="file" className='w-full p-2 border border-gray-600' name='logo' placeholder='Add logo Image' onChange={onChangeLogo}/>
                     </div>

                     <div className='w-8/12 flex flex-col justify-center items-start my-2'>
                      <label htmlFor="image" className='font-semibold text-xl' >
                        Enter Backgound Image
                      </label>

                      <input type="file" className='w-full p-2 border border-gray-600' name='image' placeholder='Add logo Image'onChange={onChangeImage} />
                     </div>

                     <div className='w-8/12 flex flex-col justify-center items-start my-2'>
                      <input type="submit" className='w-3/12 p-2 border border-gray-600 bg-orange-300' />
                     </div>

                 </form>
             </div>
    </div>
     }

    <div className='w-screen md:h-1/2 h-4/5 flex flex-col justify-center items-center'>
        <div className='lg:w-8/12 md:w-11/12 w-full md:h-1/5 h-28  flex md:justify-start justify-center items-center font-bold text-2xl text-center' >
          Please shop something from popular categories !
        </div>
        <div className='md:h-3/5 h-fit lg:w-10/12 md:w-11/12 w-full flex flex-wrap justify-center items-center ' >
             {data?.map((d)=>{
              return <Link key={d.id} className='lg:w-1/4 md:w-1/3 w-8/12 md:h-1/3 flex justify-center items-center md:m-2 m-1 bg-gray-100 p-3 cursor-pointer text-decoration-none text-black' to={"/" + d.categoryName }><div  className='w-full h-full flex justify-evenly items-center' >
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
             {isAdmin && <button type='button' className='lg:w-1/4 md:w-1/3 w-8/12 md:h-1/3 flex justify-center items-center md:m-2 m-1 bg-gray-100  cursor-pointer text-decoration-none text-black border border-black' >
              <div className='w-full h-full flex justify-center items-center p-3' >
                         <div className='h-4/5 flex justify-center items-center' >
                            {/*  plus icons */}
                            <FaPlus className='text-gray-300 text-5xl' />
                         </div>

                         <button type='button' className='h-4/5 font-semibold text-xl text-gray-300 flex justify-center items-center' onClick={()=>{setVisibility(!visibility)}} >
                              
                                 Add Category
                              
                         </button>

                     </div>
                     </button>
                 }
        </div>
       
    </div>
    </>
  )
}

export default Category;