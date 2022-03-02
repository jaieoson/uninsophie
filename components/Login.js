

import Li from '../components/PostLoop'


// pode chamar uma função para autenticar o usuario


function LogarUserUniAdm(props){


    let userUniAdmEmail = 'jaieosom@gmail.com';
    let userUniAdmPass = '123456';


    if(userUniAdmEmail == props && userUniAdmPass == props){

//se sim  envia para


    }else{

//senao envia para

    }


}



export default function Login(){
   return(

     <div className="album py-5">
       <div className="container">

    <p>Email e senha para entrar</p>       
    
<input type="email" className='email' placeholder='email' ></input>
<br/><br/>
<input type="password" className='pass' placeholder='password'></input>




       </div>




      </div>
   )
 }

