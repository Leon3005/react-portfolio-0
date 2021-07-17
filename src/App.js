import "./App.scss";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
