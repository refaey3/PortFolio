import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop";
function App() {
  return (
    <>
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
