import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import AnimHeading from "../ui-components/anim-heading/AnimHeading";
import ProjectItem from "../works/ProjectItem"
import "./works.css"


export default function Works() {
  return (
    <Box
      pt={12}
      mt={8}
    >
      <VStack spacing={2} textAlign="center" >
        <AnimHeading color="black" custom={2}>
          Projects
        </AnimHeading>
      </VStack>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        alignItems="center"
        flexWrap='wrap'
        gap={{ base: "4", lg: "10" }}
      >
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Flex>
    </Box>
  );
}
