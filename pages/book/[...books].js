import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import Link from "next/link";

export default function JourneyBook(){
    const [createdAt,setTime]=useState("");
    const router=useRouter();
    const [bookID,setBookID] =useState(router.query.books);
    const [title,setTitle] = useState("");
    const [bookArray, setBook]= useState([]);
    const [visibility,setVisible]=useState(false);
    console.log(bookID)
    function getNotes(){
        const time = new Date();
        setTime(createdAt, time.toLocaleDateString());
    }
    
    async function addNotes(e){
        e.preventDefault();
            setBook([title,...bookArray]);
            setVisible(current=>!current);
       /* const add= await fetch (`https://api.rulim34.dev/books/${bookID}`,{
            method:'POST',
            header:{'Content-Type':'aplication/json'},
            body: JSON.stringify({
                createdAt,

            })
        }).then(res=>res.json());*/
    }

const handleClick = () => {
    setVisible(current => !current);
  };

    return(
        <main>
            <Head><title>The Book</title></Head>
            <Navbar/>
            <div className="text-3xl text-white"><h1>Mbuh</h1></div>
            <div style={{display: visibility ? 'block' : 'none'}}>
            <label>Judul Buku</label>
            <input type="text" id='judul' placeholder='Judul Buku' onChange={(e)=>setTitle(e.target.value)}></input>
            <button className="rounded-full bg-purple-700 text-white" id="add" onClick={addNotes}>Add</button>
            </div>

            <button className="rounded-full bg-purple-700 text-white w-20 h-20 fixed right-10 bottom-10" id="add" onClick={handleClick}>Add</button>
            <div className=" p-5 grid grid-cols-4 gap-5">
            {bookArray.map((titleBook,index)=>{
            return (
               <Link href={{pathname:`./${bookID}/${titleBook.toLowerCase().replace(/ /g, '-')}`}}> <div className="bg-purple-700 text-white p-10" key={index}><a>{titleBook}</a></div></Link>
            )})}
            </div>
        </main>
    )
}