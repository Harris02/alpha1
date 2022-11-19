import Head from "next/head";
import { useState } from "react";

export default function LoginPage(){
    const [username, setID] = useState("");
    const [password, setEmail] = useState("");
    
    async function handleLogin(event){
      event.preventDefault();
      const login = await fetch('https://api.rulim34.dev/api/v3/authentications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
  })
})
try{
  const beta = await login.json()
  console.log(beta)
}
catch(error){
  console.log(error);
}
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
            Username
          </label>
          <input type="text" id="ID"   placeholder="username" onChange={(event) => setID(event.target.value)}/>
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