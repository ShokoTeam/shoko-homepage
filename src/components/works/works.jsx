import React from "react";
import { Box } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";
import AnimHeading from "../ui-components/anim-heading/AnimHeading";


// #TODO Center title / fix anim
//
export default function Works() {
  return (
    <Box md={8}>
      <AnimHeading custom={1} >
        Our works
      </AnimHeading>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </Box>
  );
}

