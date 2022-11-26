import { useRouter } from "next/router"
import Link from "next/link";
import { useEffect, useState } from "react";
import {hasCookie,deleteCookie} from 'cookies-next';
 
export default function Navbar(){
    const router = useRouter();
    const [isLoggedin,setLogin]=useState(null)
    useEffect(()=>{
     setLogin(hasCookie('token'));
    })
    
    return(
        <nav className="flex flex-row pt-10 bg-transparent">
            <h1 className="basis-[90%] font-bold text-3xl text-blue-400 ml-10"><Link href="/">Alpha 1</Link></h1>
            <button style={{display:isLoggedin?'none':'block'}} onClick={function(){router.push('/register')}} className="hover:bg-purple-700 text-white rounded-lg border-4 w-[100px]">Sign Up</button>
            <button style={{display:isLoggedin?'none':'block'}} onClick={function(){router.push('/login')}} className="rounded-lg hover:bg-purple-700 border-4 text-white  p-1 px-4  mr-10 ml-5">Login</button>
            <button style={{display:isLoggedin?'block':'none'}} onClick={function(){router.push('/login');deleteCookie('token') }} className="bg-transparent hover:bg-purple-700 mr-10 text-white rounded-lg border-4 w-[100px]">Logout</button>
        </nav>
    )
}