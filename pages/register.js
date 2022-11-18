import React from "react";
import { Router } from "next/router";
import { useState } from "react";

export default function RegisterForm() {
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const regData = await fetch('api.rulim34.dev/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullname,
        email,
        username,
        password,
      })
    })
   try{
      console.log(regData);
     }
   catch(error){
    console.log(error);
  }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>

        <legend>Register</legend>
        <div>
          <label>
            Full Name
          </label>
          <input type="text" id="fullName"   placeholder="Full Name" onChange={(event) => setFullName(event.target.value)}/>
        </div>
        <div>
          <label>
            Email
          </label>
          <input type="email" id="emailInput"  placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
          <label>
            Username
          </label>
          <input type="text" id="username"   placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
          <label>
            Password
          </label>
          <input type="password" id="passwordInput" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
        </div>
        
        
        
        <button type="submit" className="btn btn">
          Submit
        </button>

      </fieldset>
    </form>
  );
}
