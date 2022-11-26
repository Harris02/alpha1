import { useState,useEffect, Component } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import { hasCookie } from "cookies-next";
import swal from "sweetalert";
import useGeolocation from "react-hook-geolocation";

export default function JourneyBook(){
    const [createdAt,setTime]=useState("");
    const router=useRouter();
    const [bookTitle,setBookTitle] = useState('');
    const [title,setTitle] = useState("");
    const [bookArray, setBook]= useState([]);
    const [visibility,setVisible]=useState(false);
    const [text,setText]=useState([])
    const isAuthenticated=hasCookie('token')
    const geolocation = useGeolocation();
    
    

    useEffect(()=>{
        if(!isAuthenticated==true){
            swal("Forbidden","You must login first", "warning")
            router.push('/login')
        }
        setBookTitle(router.query.books)
    },[])
    
    
    async function addNotes(e){
        e.preventDefault();
            setBook([title,...bookArray]);
            setVisible(current=>!current);
            setTime(time.toLocaleDateString());
       /* const add= await fetch (`https://api.rulim34.dev/books/${bookID}`,{
            method:'POST',
            header:{'Content-Type':'aplication/json'},
            body: JSON.stringify({
                createdAt,

            })
        }).then(res=>res.json());*/
    }
    
        const time = new Date()
    

const handleClick = () => {
    setVisible(current => !current);
  };

    return(
        <main>
            <Head><title>The Book</title></Head>
            <Navbar/>
            <div style={{display: visibility ? 'block' : 'none'}}>
            <div className="flex flex-col fixed top-[5%] left-[25%] items-center justify-center z-10 h-full">
            <label className="text-white text-xl">Tambahkan Notes</label>
            <input className="py-5 border-2 w-[50vw] border-purple-700 px-20" type="text" id='judul' placeholder='Judul Notes' onChange={(e)=>setTitle(e.target.value)}></input>
            <textarea className=" p-20 border-2 w-[50vw] border-purple-700" type="text" id='notes' placeholder='Isi Notes' onChange={(e)=>setText(e.target.value)}></textarea>
            <button className="p-2 rounded-md bg-purple-700 text-white" id="add" onClick={addNotes}>Add</button>
            </div>
            </div>

            <div className='text-white text-3xl text-center font-bold'>{bookTitle}</div>

            <button className="rounded-full bg-purple-700 text-white w-20 h-20 fixed right-10 bottom-10" id="add" onClick={handleClick}>Add</button>
            <div className=" p-5 grid grid-cols-4 gap-5">
            {bookArray.map((titleBook,index)=>{
            return (
                
                <Link href={{pathname:`./${bookTitle}/${titleBook.toLowerCase().replace(/ /g, '-')}`}}> 
                <div className="bg-transparent hover:backdrop-blur-sm border-2 border-purple-700 text-white p-10" key={index}>
                    <div className="text-xl font-bold">
                        {titleBook}
                    </div>
                    <div>
                        <p>Latitude : {geolocation.latitude}</p>
                        <p>Longitude : {geolocation.longitude}</p>
                    </div>
                    <div>
                       Created at : {createdAt}
                    </div>
                </div></Link>
                
            )})}
            </div>
        </main>
    )
}