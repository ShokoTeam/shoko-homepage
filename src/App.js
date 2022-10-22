import "./App.css";

import Team from "./components/team/team.jsx";
import Skills from "./components/skills/skills.jsx";
import Contact from "./components/contact/contact.jsx";
import Works from "./components/works/works.jsx";
import Hero from "./components/hero/hero.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";
import data from "./data/data.json";

import "./styles/global.css";

function App() {
  return (
    <>
      <Hero />
      <Team />
      <Skills />
      <Works data={data.slides} leadingText={"We built"} />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
