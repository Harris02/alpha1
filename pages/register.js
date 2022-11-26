import React, { useDebugValue, useEffect } from "react";
import swal from 'sweetalert';
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";


export default function RegisterForm() {
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [confirm,setConfirm]=useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const regData = await axios.post('https://api.rulim34.dev/api/v3/users', {
      fullname,
      password,
      email,
      username
    }).catch(error=>{
      swal({title: 'Failed',text:'Data yang kamu masukkan sudah ada di database',icon:'error'})
    })
   try{
      const alpha = await regData.data;
      console.log(alpha);
      swal("Success","Registration Successfull","success");
      setTimeout(window.location.replace('./login'),3000)
     }
   catch(error){
   console.log(error)
  }
}
 function handleInvalid(e){
      if(confirm!==password){
        e.target.setCustomValidity('Your password is wrong')
      }
  }
  useEffect(()=>{handleInvalid()},[])
  function handleChange(e){
    e.target.setCustomValidity("")
  }
  return (
//
    <div className="bg-space bg-[url(/shoot.svg)]  text-purple-700 ">
    <Navbar/>

    <form onSubmit={handleSubmit}>
      <fieldset className="flex flex-col justify-center items-center">
      <div>
      <div className='rounded-full bg-white w-40 h-40 flex items-center justify-center' id="circle-1">
        <div className='rounded-full bg-purple-600 w-36 h-36 flex items-center justify-center' id='circle-2'>  
          <div className='rounded-full bg-white h-32 w-32 flex items-center justify-center' id='circle-3'>  
            <div className='rounded-full bg-purple-600 h-28 w-28 flex items-center justify-center' id='circle-4'></div>
            </div>
        </div>
      </div>
      </div>
          <input required pattern="^[a-zA-Z ]+$" onInvalid={(e)=>e.target.setCustomValidity("Cant have any symbols or numbers")} onInput={handleChange} className='text-white rounded-full h-12 w-1/2 my-5 bg-slate-900 text-center' type="text" id="fullName"  placeholder="Full Name" onChange={(event) => setFullName(event.target.value)}/>
          <input required className='rounded-full h-12 w-1/2 my-5 text-white bg-slate-900 text-center' type="email" id="emailInput"  placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
          <input required pattern="[a-z0-9]+" onInvalid={(e)=>e.target.setCustomValidity("Cant have any spaces, any symbols, or any capitalized alphabet")} onInput={handleChange}  className='text-white rounded-full h-12 w-1/2 my-5 bg-slate-900 text-center' type="text" id="username"   placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
          <input required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" onInvalid={(e)=>e.target.setCustomValidity("Minimum 8 chars with one letter and one number")} onInput={handleChange} className='rounded-full h-12 w-1/2 my-5 bg-slate-900 text-white text-center' type="password" id="passwordInput" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
          <button type="submit" className='mb-10 text-white bg-purple-600 p-5 rounded-lg w-1/4'>Sign Up</button>

      </fieldset>
    </form>
    </div>
  );
} 
