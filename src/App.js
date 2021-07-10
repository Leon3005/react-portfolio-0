import "./App.scss";
import Header from "./components/Header";
import homepagetech from "./assets/images/homepagetech.png";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <div className="projects d-flex justify-content-center" id="projects">
          <div className="vl"></div>
          <div className="projectList">
            <div className="project">
              <img src={homepagetech} className="projectImage"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
