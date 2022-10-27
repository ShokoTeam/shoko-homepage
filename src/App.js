import "./App.css";

import Team from "./components/team/team.jsx";
import Skills from "./components/skills/skills.jsx";
import Contact from "./components/contact/contact.jsx";
import Hero from "./components/hero/hero.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";
import Works from "./components/works/works";

import "./styles/global.css";

function App() {
  return (
    <>
      <Hero />
      <Team />
      <Skills />
      <Works />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
