import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";




export default function Book(){
    const [title,setTitle] = useState("");
    const [bookArray, setBook]= useState([]);
    const [prevBooks, setPrevBook]=useState([])
     
    //Nampilin buku yang pernah dibuat
   /* async function getBook(){    
    const idBook = await fetch('https://api.rulim34.dev/api/v3/books',{method:'GET'});
    try{
        const bookID = await idBook.json();
        const booksTitle = bookID.data.books;
        setPrevBook[prevBooks, booksTitle];
    }
    catch(error){
        console.log(errors)
    }      
    }
    useEffect(()=>{getBook()},[]); */

    //Nambah Buku
    async function addBook(e){
        e.preventDefault();
        setBook([title,...bookArray]);
        const add= await fetch ('https://api.rulim34.dev/api/v3/books',{
            method:'POST',
            header:{'Content-Type':'aplication/json'},
            body: JSON.stringify({
                title
            })
        });
        try{
            const addedBook= await add.json()
            console.log(addedBook);
        }
        catch(error){
            console.log(error);
        }
}


    
    return(
        <main>
            <Head><title>Book Page</title></Head>
            <header>Book Page</header>
            <label>Judul Buku</label>
            <div>
            <input type="text" id='judul' placeholder='Judul Buku' onChange={(e)=>setTitle(e.target.value)}></input>
            <button id="add" onClick={addBook}>Add</button>
            <ul>
            {bookArray.map((titleBook,index)=>{
            return (
               <Link href={`./book/${titleBook.toLowerCase().replace(/ /g, '-')}`}> <li key={index}>{titleBook}</li></Link>
            )})}

            </ul>
            <Link href="./exampleMap">Map</Link>
            </div>
        </main>
    )
}