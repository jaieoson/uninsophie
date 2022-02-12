import Link from 'next/link'
import Image from 'next/image';
import profilePic from '../public/img/logo.png'

function Header() {
    return (
      <nav
        className="footer"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">

<Link href={"/"}>
          <a className="navbar-brand copyright">
            
            <p className="branco"> 
            
            <Image src={profilePic} width={30} height={30} alt="logo"/> from UNISOPHIE </p>
          </a>
</Link>

        </div>
      </nav>
    );
  }
  export default Header