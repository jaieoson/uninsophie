import React from "react";
import Head from "next/head"; 
import 'bootstrap/dist/css/bootstrap.css'

 import '../styles/globals.css';

import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
   
  }, []);


  return (
        <div>


  <Head> 
   <meta name="viewport" content="width=device-width, initial-scale=1" /> 



</Head>
  
  <Component {...pageProps} />

        </div>
)

}


