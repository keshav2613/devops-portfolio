import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import KubeDiagnoseCaseStudy from "./pages/KubeDiagnoseCaseStudy";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Credentials from "./components/sections/Credentials";
import Contact from "./components/sections/Contact";

import CloudSpendCaseStudy from "./pages/CloudSpendCaseStudy";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/projects/cloudspend-guard"
          element={<CloudSpendCaseStudy />}
        />
        <Route
          path="/projects/kubediagnose"
          element={<KubeDiagnoseCaseStudy />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;