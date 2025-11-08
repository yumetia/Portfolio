import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="mb-20">
        <Navbar />
      </div>
      <div className="p-5 md:px-[15%]">
        <Home />
      </div>
      <About />
      <div>
        <Skills/>
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Experiences />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
