const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              home
            </a>
            <a className="nav-link " href="#projects">
              projects
            </a>
            <a className="nav-link" href="#">
              about me
            </a>
            <a className="nav-link" href="#">
              contact me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
