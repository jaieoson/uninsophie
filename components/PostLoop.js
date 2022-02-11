
import Image from 'next/image';
import profilePic from '../public/img/logo.png'

export default function select(){

    // esse component recebe os dados do db e faz um loop conforme a qtd de itens retornados
    // sempre que precisar disso em um projeto podemos utilizar os componentes prontos

        const elements = 20;
      
        const items = []
      
        for (let i = 0; i < elements; i++) {

          items.push(
          
            <a href="https://unisophie.vercel.app/poster">

            <div className="col" key={elements.toString()}>
            <div className="card shadow-sm">


            <Image src={profilePic} width={300} height={300} alt="logo"/>
        
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Reac Now</button>
                    </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          
       </a>
          
          
          )

        }
      
        return (
          <div>
            {items}
          </div>
        )
      }

    

    
    