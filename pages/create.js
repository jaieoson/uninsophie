
import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";

import FormPost from "../components/FormPost";


export default function CreatePage() {


    return (
    
    <div>
<Head>


     <script dangerouslySetInnerHTML={{

__html: `
if(!document.cookie || !document.cookie.includes('jailson-auth')){

window.location.href="/login"
}`,

}}
/>



</Head>





<Header />
     

  


     <div className="autorCreator">

 

<FormPost/>

     </div>
      

     <Footer />
      </div>

    )

  }


  