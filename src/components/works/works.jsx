import React from "react";
import { Box  } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";
import AnimHeading from "../ui-components/anim-heading/AnimHeading";


export default function Works() {
  return (
    <Box md={8}>
      <AnimHeading >
        Our works
      </AnimHeading>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </Box>
  );
}

