import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollProgress, BackToTop, FloatingSocials } from "./components/ScrollUtils";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Systems from "./sections/Systems";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import { Journey, Education, Roadmap } from "./sections/Journey";
import { GitHubSection, Contact } from "./sections/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""} style={{ background: "#020817", minHeight: "100vh" }}>
      <ScrollProgress />
      <FloatingSocials />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Systems />
        <TechStack />
        <Projects />
        <Journey />
        <Education />
        <Roadmap />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
