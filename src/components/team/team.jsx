import React from "react";
import {
  Text,
  Stack,
  Box,
  VStack,
  Flex
} from "@chakra-ui/react";
import { motion } from "framer-motion"

import "./team.css";

import Card from "./../atoms/card/card.jsx";

import AnimHeading from "../atoms/anim-heading/AnimHeading";
import { teamInfo } from "./data";



const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}




function Team() {
  return (
    <Box
      as={motion.div}
      display="flex"
      flexDir="column"
      justifyContent='center'
      alignItems="center"
      h={{ sm: "auto", base: "100%", md: "100%" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      py={8}
      mt={8}
      color="black"
    >
      <VStack
        spacing={2}
        alignItems="center"
        textAlign="center"
      >
        <Flex
          alignItems="center"
          mb={10}
          flexDir="column"
        >
          <Text as={motion.h3} variants={textAnimation} custom={1} fontSize={24} fontWeight="bold" mb={5} maxW="1240px">
            We are ordinary people, who are united by common interests and as
            well as the desire to improve ourselvers. As we are young developer,
            we still have a lot to achieve
          </Text>
          <Text as={motion.h3} variants={textAnimation} custom={1.5} fontSize={24} mb={15} maxW="1240px">
            We don't know where this path would lead us to but we hope to
            achieve a lot
          </Text>
        </Flex>
        <AnimHeading custom={2}>Our Team</AnimHeading>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        wrap="unset"
        spacing={{ base: 3, lg: 3 }}
        py={10}
      >
        {teamInfo.map(props => (
          <Card
            id={props.id}
            image={props.image_url}
            name={props.name}
            job={props.job}
            github={props.github}
            telegram={props.telegram}
          />
        ))}
      </Stack>
    </Box >
  );
}

export default Team;
