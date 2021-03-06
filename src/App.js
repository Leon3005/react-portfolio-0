import "./App.scss";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
