import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <div className="projects d-flex justify-content-center" id="projects">
          <div className="vl"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
