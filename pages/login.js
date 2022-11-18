import Head from "next/head";
import { useState } from "react";

export default function LoginPage(){
    const [username, setID] = useState("");
    const [password, setEmail] = useState("");
    
    async function handleLogin(event){
      event.preventDefault();
      await fetch('https://virtserver.swaggerhub.com/Alpha1_Inbound/JourneyBook/1.0.0/authentications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
  })
})
try{ 
  window.location.replace('./book');
}
catch(error){
alert(data.errors);
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