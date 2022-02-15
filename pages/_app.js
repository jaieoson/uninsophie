import React from "react";

// referenciando cabeçalho
import Head from "next/head"; 


// adiciona bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
 // arquivo css de config. global
 import '../styles/globals.css';

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

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

export default MyApp
