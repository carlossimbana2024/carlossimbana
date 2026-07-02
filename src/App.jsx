import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-offwhite text-obsidian">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;