/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useState } from "react";
import {Link ,useNavigate} from "react-router-dom";
import axios from "axios";

const intialState = {
      userName : '',
      email : '',
      password : '',
};

const Login = () => {

   const navigate = useNavigate()
   const [formValue, setformValue] = useState(intialState);
   const {userName , email , password} =  formValue;

     const togglePasswordVisibility = (e) =>{
        var passwordInp= document.getElementById("passwordInp");
        if(e.target.checked){
           passwordInp.setAttribute("type" , "text");
        }else{
          passwordInp.setAttribute("type" , "password");
        }
     }

    const onInputChange = (e) =>{
      let {name , value} = e.target;
      setformValue({...formValue , [name] : value });
     }

  return (
    <section className="h-screen w-screen flex justify-center items-center bg-gray-900">
    <div className="h-full w-full flex justify-center items-center">
        <div className=" w-9/12 md:w-6/12 lg:w-5/12 xl:w-5/12">
          <form action="/user/login" method="post" className="bg-white rounded-3xl p-4">
          {/*  heading and other auth options */}
            <div
              className="flex flex-row items-center justify-center lg:justify-center">
              <p className="mb-0 mr-4 text-lg text-center font-semibold">Login With</p>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className=" mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
  
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
  
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inlne-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
            </div>
          {/*  form header ends here  */}
            <div
              className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p
                className="mx-4 mb-0 text-center font-semibold ">
                Or
              </p>
            </div>
            <div className="relative mb-2" data-te-input-wrapper-init>
              <label htmlFor="email" className="text-gray-500" >
                Email
              </label>
              <input
                type="email"
                className="text-gray-900 placeholder-gray-900 border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                value={email}
                name="email"
                onChange={(e)=>onInputChange(e)}
                placeholder="Email address" 
                required
                />
              
            </div>
  
            <div className="relative mb-2" data-te-input-wrapper-init>
              <label htmlFor="password" className="text-gray-500" >
                Password
              </label>
              <input
                type="password"
                className="text-gray-900 placeholder-gray-900 border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="passwordInp"
                autoComplete="on"
                name="password"
                value={password}
                onChange={(e)=>{onInputChange(e)}}
                placeholder="Password" 
                required
                />
            
            </div>
  
            <div className="mb-2 flex items-center justify-between p-2">
              <div>
                <input
                  type="checkbox"
                  id="exampleCheck2"
                  onChange={(e)=>{togglePasswordVisibility()}} />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="showPassword" >
                  Show Password
                </label>
              </div>
  
              <a href="#!">Forgot password?</a>
            </div>
  
            <div className="text-center lg:text-left bg-indigo-900 py-2">
              <input
                type="submit"
                className="w-6/12 inline-block rounded bg-primary py-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light" value="Login">
              </input>
  
              <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-gray-300">
                Don't have an account?
                <Link to="/signUp"
                  className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 mx-1"
                  >
                    Register
                  </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
   
  </section>
);
};

export default Login;
