import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import {hasCookie, getCookie,setCookie} from 'cookies-next';
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../components/navbar";
import swal from "sweetalert";



export default function Book(){
    const [title,setTitle] = useState("");
    const [bookArray, setBook]= useState([]);
    const [prevBooks, setPrevBook]=useState([]);
    const [visibility,setVisible]=useState(false);
    const isAuthenticated=hasCookie('token')
    const router = useRouter();
    const token = getCookie('token');

    useEffect(()=>{
        if(!isAuthenticated==true){
            swal("Forbidden","You must login first", "warning")
            router.push('./login')
        }})
    

    //Nampilin buku yang pernah dibuat
   /*async function getBook(){    
    const idBook = await fetch('https://api.rulim34.dev/api/v3/books',{method:'GET',
        headers:{'Content-Type':'aplication/json','Authorization':`Bearer ${token}`}        
}).catch(err=>{console.log(err)})
    try{
        const bookID = await idBook.json();
        const booksTitle = bookID.data.books;
        setPrevBook[prevBooks, booksTitle];
        setBook[prevBook,bookArray];
    }
    catch(error){
        console.log(error)
    }      
    }
    useEffect(()=>{getBook()},[]);*/

    //Nambah Buku
    async function addBook(e){
        e.preventDefault();
        setBook([title,...bookArray]);
        setVisible(current=>!current);
        const add= axios.post('https://api.rulim34.dev/api/v3/books',{
            header:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`},
            body: JSON.stringify({
                title
            })
        }).catch(err=>{swal("Successful","Added book successfully","success")})
        try{
            const addedBook= add;
            console.log(addedBook);
        }
        catch(error){
            console.log(error);
        }
}

const handleClick = () => {
    setVisible(current => !current);
  };

    
    return(
        <main className="text-purple-700">
            <Head><title>Book Page</title></Head>
            <header className="text-center text-5xl font-bold pt-5">Book Page</header>
            <Navbar/>
            <div style={{display: visibility ? 'block' : 'none'}}>
            <div className="flex flex-col fixed top-[5%] left-[40%] items-center justify-center z-10 h-full">
            <label className="text-white text-xl">Judul Buku</label>
            <input className="rounded-md p-20" type="text" id='judul' placeholder='Judul Buku' onChange={(e)=>setTitle(e.target.value)}></input>
            <button className="p-2 rounded-md bg-purple-700 text-white" id="add" onClick={addBook}>Add</button>
            </div>
            </div>

            <button className="rounded-full bg-purple-700 text-white w-20 h-20 fixed right-10 bottom-10" id="add" onClick={handleClick}>Add</button>
            <div style={{display:visibility?'none':'grid'}} className="ml-5 p-5 grid grid-cols-4 gap-5">
            {bookArray.map((titleBook,index)=>{
            return (
               <Link as={`/book/${titleBook}`} href='/book/[books]'> <div className="bg-transparent rounded-lg border-2 border-purple-700 hover:backdrop-blur-sm hover:scale-105 text-white p-10" key={index}>{titleBook}</div></Link>
            )})}
            </div>
        </main>
    ) 
    
}