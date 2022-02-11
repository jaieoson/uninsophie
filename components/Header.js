

export default function Header() {
    return (
      <header>

<nav class="navbar navbar-light navbar-expand-lg text-white bg-dark fixed-top">
  <div class="container-fluid ">
  <img src="img/logo.png" width={60}/>
  
    <a  href="/">
      
     <p className="logotipo"> UNISOPHIE </p>

      </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">

        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">UNISOPHIE</h5>

        
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/post">Posts</a>
          </li>
     
        </ul>
        <form class="d-flex">
       
          <button class="btn btn-outline-success" type="submit">Create</button>
        </form>
      </div>
    </div>
  </div>
</nav>

        
      </header>
    );
  }
  