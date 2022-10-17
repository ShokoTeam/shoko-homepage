import "./App.css";

import Header from "./components/header/header.jsx";
import Team from "./components/team/team.jsx";
import Skills from "./components/skills/skills.jsx";
import Contact from "./components/contact/contact.jsx";
import Works from "./components/works/works.jsx";
import data from "./data/data.json";

function App() {
  return (
    <>
      <Header />
      <Team />
      <Skills />
      <Works data={data.slides} leadingText={"We built"} />
      <Contact />
    </>
  );
}

export default App;
