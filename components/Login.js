

import Li from '../components/PostLoop'


// pode chamar uma função para autenticar o usuario

// essa autenticação deve estar em um lugar e ser chamada sempre que precisar
// permitir acesso a pagina


function LogarUserUniAdm(email, senha){


    let userUniAdmEmail = 'jaieosom@gmail.com';
    let userUniAdmPass = '123456';


    if(userUniAdmEmail == email && userUniAdmPass == senha){

//se sim  envia para OU GERA UM TOKEn e direciona
//const logado = true;
alert('logado com sucesso')

window.location.href = "http://www.devmedia.com.br";


    }else{
//const logado = false;
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

