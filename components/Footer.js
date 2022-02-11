import Link from 'next/link'


export default function Header() {
    return (
      <nav
        className="footer"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">

<Link href={"/"}>
          <a className="navbar-brand copyright">
            
            <p className="branco"> <img src="img/logo.png" width={30}/> from UNISOPHIE </p>
          </a>
</Link>

        </div>
      </nav>
    );
  }