import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <div className="projects d-flex justify-content-center">
          <h1 className="mt-5">projects</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
