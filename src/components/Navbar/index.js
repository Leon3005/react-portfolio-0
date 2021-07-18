import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item" key={uuidv4()}>
                <a className="nav-link active" aria-current="page" href="#home">
                  home
                </a>
              </li>
              <li className="nav-item" key={uuidv4()}>
                <a className="nav-link " href="#projects">
                  projects
                </a>
              </li>
              <li className="nav-item" key={uuidv4()}>
                <a className="nav-link" href="#aboutMe">
                  about me
                </a>
              </li>
              <li className="nav-item" key={uuidv4()}>
                <a className="nav-link" href="#contactMe">
                  contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
{
}
export default Navbar;
