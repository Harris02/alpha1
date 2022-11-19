import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import  RegisterForm  from './register'


export default function Home() {
  async function signout(){
    fetch('https://virtserver.swaggerhub.com/Alpha1_Inbound/JourneyBook/1.0.0/authentications',{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      },
      body:{
        refreshToken
      }
    })
    window.location.replace('./')
  }
  return (

    
    <div className={styles.container}>
      <Head>
        <title>Welcome To Inbound</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Tes</div>
      <RegisterForm/>
      <button onClick={signout}>Sign Out</button>

    </div>
  )
}
