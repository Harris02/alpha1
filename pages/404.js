import Image from "next/image";
import Astronaut from "../components/pageError/astronaut";
import Blackhole from "../components/pageError/black-hole";
import Star from "../components/pageError/star";
import { useRouter } from "next/router";
import Head from "next/head";
export default function FourOhFour(){
    const router = useRouter();
    return(
    <>
    <Head><title>404 Not Found</title></Head>
    <div className="text-center">
    <div className="absolute top-[10%] left-[10%] w-[40%] h-[30%]">
        <Astronaut/>
    </div>
    <div className="w-[5%] absolute top-[10%] left-[20%]">
        <Star/>
    </div>
    <div className="w-[5%] absolute top-[30%] left-[40%]">
        <Star/>
    </div>
    <div className="w-[5%] absolute top-[50%] left-[35%]">
        <Star/>
    </div>
    <div className="w-[5%] absolute top-[44%] left-[12%]">
        <Star/>
    </div>
    <div className='animate-rotation -z-10 w-[10%] absolute top-[10%] left-[40%]'>
        <Blackhole/>
    </div>
    </div>
    <div className="text-white absolute w-[30%] right-[13%] top-[40%]">
        <h1 className="font-bold text-5xl">404</h1>
        <h2 className="text-3xl">Oops! You are lost in outer space!</h2>
        <p>The page you are looking for cannot be reached. Click the button below to go to Homepage</p>
        <button className="border-2 border-purple-700 hover:bg-purple-700 rounded-md p-3" onClick={(e)=>{router.push('/')}}>Go to Homepage</button>
    </div>
    </>
    )
}