import { defineStyleConfig } from "@chakra-ui/react";

const Container = defineStyleConfig({
  baseStyle: {
    w: "100%",
    mx: "auto",
    maxW: "960px",
    px: [4, 6],
    py: [8, 10],
    backgroundColor: "white",
  },
  defaultProps: {
    colorScheme: "red",
  },
});

export default Container;
