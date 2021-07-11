import "./App.scss";
import Header from "./components/Header";
import homepagetech from "./assets/images/homepagetech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <h1 className="text-center" id="projectHeading">
          projects
        </h1>
        <div className="projects d-flex justify-content-evenly">
          <div className="project mt-5">
            <img
              src={homepagetech}
              className="projectImage"
              alt="The tech blog"
            ></img>
            <h5 className="text-center mt-3">The Tech Blog</h5>
            <p className="text-center text-secondary">
              The Tech Blog is a full-stack MVC application that allows users to
              create an account, login and logout, create, view, update, and
              delete posts, and add comments to posts.
            </p>
            <p className="text-center text-danger">
              Tech Used: Node.js, Express, jQuery, MySQL, Handlebars, bCrypt,
              Bootstrap
            </p>
            <div className="text-center d-flex justify-content-evenly">
              <a
                href="https://github.com/Leon3005/tech-blog"
                target="_blank"
                className="projectLink"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://mighty-wildwood-56891.herokuapp.com/"
                target="_blank"
                className="projectLink"
              >
                <FontAwesomeIcon icon={faServer} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
