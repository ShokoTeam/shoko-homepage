import { extendTheme } from "@chakra-ui/react";
import Container from "./components/ui-components/Container.jsx"

const components = {
  Heading: {
    default
  }
};

const styles = {
  global: {
    body: {
      bg: "brain.main",
    },
  },
};

const colors = {
  brand: {
    main: "#22273a",
    textw: "#000",
    textb: "#fff",
    buttonBackground: "#303e72",
  },
};

const textstyles = {
  fontstyle: {
    lg: "56px",
    h1: "34px",
    h3: "24px",
    p: "15px",
  },
  fontWeigths: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  colors,
  fontstyle,
  components: {
    Container,
  }

});

export default theme;
