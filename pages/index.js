import Head from 'next/head'
import Navbar from '../components/navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [effect,setEffect]=useState(true);
  const router=useRouter();
  function redirect(){
    router.push('/book')
  }

  return ( 
    <div  className='bg-space w-full h-screen overflow-hidden bg-[url(/shoot.svg)]'>
      <Head>
        <title>Welcome To Inbound</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Image className='left-[15%] absolute top-[23%]' width={200} height={200} alt="Gambar Bulan" src='/moon.svg'/>
      <div className='h-screen text-white flex flex-col items-center justify-center w-full'>
      <h1 className='z-10 font-bold text-[400%]  text-purple-700'>Welcome To Crux Planet</h1>
      <h2 className='text-xl mb-20'>You can make note taking using this website</h2>
      <button onClick={redirect} className="border-3 w-[20%] h-[10%] rounded-md bg-purple-700 p-2" >Explore Now</button>
      </div>
    </div>
  )
}
 