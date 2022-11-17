
import Team from "./components/team/team.jsx";
import Services from "./components/services/services.jsx";
import Contact from "./components/contact/contact.jsx";
import Hero from "./components/hero/hero.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";
import Works from "./components/works/works";

import "./styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <Team />
      <Services />
      <Works />
      <Testimonials />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
