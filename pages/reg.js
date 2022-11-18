import React from "react";
import { Router } from "next/router";
import { useState } from "react";

export function RegisterForm() {
  const [title, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const regData = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        password,
        email
      })
    })
   try{ const resp = await regData.json();
    console.log(resp)
   }
   catch(error){console.log(error)}
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>

        <legend>Register</legend>

        <div>
          <label>
            Email
          </label>
          <input type="email" id="emailInput"   placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
          <label>
            Full Name
          </label>
          <input type="text" id="fullName"   placeholder="Full Name" onChange={(event) => setFullName(event.target.value)}/>
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
