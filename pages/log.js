import Head from "next/head";
import { Router } from "next/router";
import { useState } from "react";

export default function LoginPage(){
    const [username, setID] = useState("");
    const [password, setEmail] = useState("");
    
    async function handleLogin(event){
      event.preventDefault();
      const fetching = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
  })
})
const data= await fetching.json();
if(data.gender=='male'){
  alert("Hellooooooooo")
}
else alert("Mommy...")
    }
    return(
    <>
    <Head>
        <title>Login Page</title>
    </Head>
    <form onSubmit={handleLogin}>
      <fieldset>
        <legend>Login</legend>
        <div>
          <label>
            ID
          </label>
          <input type="text" id="ID"   placeholder="Your ID" onChange={(event) => setID(event.target.value)}/>
        </div>
        <div>
        <label>
            Email
        </label>
          <input type="password" id="email"   placeholder="password" onChange={(event) => setEmail(event.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn">
          Submit
        </button>

      </fieldset>
    </form>
    </>
    )
}