import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/img/logo.png'



import Player from './Player';

export default function Header() {
    return (
      <header>

<nav className="navbar navbar-light navbar-expand-lg text-white bg-dark fixed-top">
  <div className="container-fluid ">


  <Image src={profilePic} width={60} height={60} alt="logo"/>
  
  <Link href={'/'}>
    <a className='logo1'>
      
     <p className="logotipo"> UNISOPHIE </p>

      </a>
</Link>




    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">

        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">UNISOPHIE</h5>

        
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">

            <Link href={"/library3D"}>
            <a className="nav-link active text-white" aria-current="page">Home</a>
            </Link>

          </li>
          <li className="nav-item">

            <Link href={"/post"}>
            <a className="nav-link text-white">Posts</a>
            </Link>

          </li>

          <li className="nav-item">

<Link href={"/about"}>
<a className="nav-link text-white">About</a>
</Link>

</li>


     
        </ul>
        <form className="d-flex">
       
          <div className="btn btn-outline-success" >
            
            <Link href={'/login'}>

            <a className='logo1'>Enter</a>
            
            </Link>
            </div>


            

        </form>



  <Player/>



        
      </div>
    </div>




    
  </div>
</nav>

        
      </header>
    );
  }
  
