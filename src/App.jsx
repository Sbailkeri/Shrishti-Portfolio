import SceneController from "./three/SceneController";
import BackgroundFX from "./three/BackgroundFX";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <>

      <BackgroundFX />

      <SceneController />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />


    </>
  );
}

export default App;