

import Li from '../components/PostLoop'


// pode chamar uma função para autenticar o usuario

// essa autenticação deve estar em um lugar e ser chamada sempre que precisar
// permitir acesso a pagina


function LogarUserUniAdm(){


    let userUniAdmEmail = document.getElementById('email');
    let userUniAdmPass = document.getElementById('senha');


    if(userUniAdmEmail == email && userUniAdmPass == senha){

//se sim  envia para OU GERA UM TOKEn e direciona
//const logado = true;
alert('logado com sucesso')

window.location.href = "http://www.devmedia.com.br";


    }else{
//const logado = false;
//senao envia para
alert('erro')
window.location.href = "http://www.facebook.com";


    }


}



export default function Login(){
   return(

     <div className="album py-5">
       <div className="container">

    <p>Email e senha para entrar</p>       
    
    <form onSubmit={LogarUserUniAdm}>

<input type="email" className='email' placeholder='email' id='email' ></input>
<br/><br/>
<input type="password" className='pass' placeholder='password' id='senha'></input>

<br></br>

<input type="submit" />

</form>



       </div>




      </div>
   )
 }

