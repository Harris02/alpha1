import Head from "next/head";
import { useState } from "react";
import swal from 'sweetalert';
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { setCookie,deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function LoginPage(){
    const [username, setID] = useState("");
    const [password, setEmail] = useState("");
    const router=useRouter();
    function redirect(){
      router.push('./book')
    }
    async function handleLogin(event){
      event.preventDefault();
      const login = await fetch('https://api.rulim34.dev/api/v3/authentications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
  })
}).catch((error) =>{
    console.log(error);
    swal({title:'Failed',text:'You put a wrong data',icon:'error'});
  })
try{
  deleteCookie('token');
  const beta = await login.json();
  const token = beta.data;
  console.log(token);
  setCookie('token',JSON.stringify(token.accessToken));
  swal({title:'Congratulations',text:beta.message,icon:'success'});
  setTimeout(redirect,3000)
}
catch(error){
  console.log(error);
}
}
    return(
    <div className="bg-space bg-[url(/shoot.svg)] ">
    <Head>
        <title>Login Page</title>
    </Head>
    <Navbar/>
    <form onSubmit={handleLogin}>
      <fieldset className="flex flex-col text-white justify-center items-center">
      <div>
      <div className='rounded-full bg-white w-40 h-40 flex items-center justify-center' id="circle-1">
        <div className='rounded-full bg-purple-600 w-36 h-36 flex items-center justify-center' id='circle-2'>  
          <div className='rounded-full bg-white h-32 w-32 flex items-center justify-center' id='circle-3'>  
            <div className='rounded-full bg-purple-600 h-28 w-28 flex items-center justify-center' id='circle-4'></div>
            </div>
        </div>
      </div>
      </div>
          <input type="text" id="ID" className='rounded-full h-12 w-1/2 my-5 bg-slate-900 text-center'   placeholder="username" onChange={(event) => setID(event.target.value)}/>
          <input type="password" className='rounded-full h-12 w-1/2 my-5 bg-slate-900 text-center' id="email"   placeholder="password" onChange={(event) => setEmail(event.target.value)}/>
        <button className='mt-10 text-white bg-purple-600 p-5 rounded-lg w-1/4' type="submit" >
          Submit
        </button>
      </fieldset>
    </form>
    </div>
    )
}