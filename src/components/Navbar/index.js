const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container-fluid ">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active" aria-current="page" href="#">
              home
            </a>
            <a class="nav-link " href="#">
              projects
            </a>
            <a class="nav-link" href="#">
              about me
            </a>
            <a class="nav-link" href="#">
              contact me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
