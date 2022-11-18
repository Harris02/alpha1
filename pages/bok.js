import Head from "next/head";

export function Book(){
    async function getBook(){
        const dataBook = await fetch('https://dummyjson.com/products/category/smartphones')
        const notes = await dataBook.json();
        console.log(notes.title);
    }
    return(
        <main>
            <Head><title>Book Page</title></Head>
            <header>Book Page</header>
            <button id="add" onClick={getBook}>Add</button>
            
        </main>
    )
}