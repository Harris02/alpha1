import { useState } from "react";

export default function JourneyBook(){
    const [createdAt,setTime]=useState("");

    function getNotes(){
        const time = new Date();
        setTime(createdAt, time.toLocaleDateString());
    }
    
    async function addNotes(e){
        e.preventDefault();
        const add= await fetch (`https://api.rulim34.dev/books/${bookID}`,{
            method:'POST',
            header:{'Content-Type':'aplication/json'},
            body: JSON.stringify({
                createdAt,

            })
        }).then(res=>res.json());
    }

    return(
        <main>
        <div>Hola</div>
        <button onClick={addNotes}>Get Time</button>
        
        </main>
    )
}