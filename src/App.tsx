import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}

export default App;