import React from "react";
import { motion } from "framer-motion"
import "./team.css";

import Hleb from "../../images/StaffCats/Hleb.jpg";
import Daria from "../../images/StaffCats/artiskat.png";
import Pasha from "../../images/StaffCats/shoshi.png";
import Ruslan from "../../images/StaffCats/ruslan.jpg";

import { Heading, Text, Stack, Box, VStack, Flex } from "@chakra-ui/react";
import Card from "./../ui-components/card/card.jsx";


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

const titleAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}



function Team() {
  return (
    <Box as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      py={12} mt={8} color="black" alignItems="center" display="flex" flexDir="column">

      <VStack spacing={2} alignItems="center" textAlign="center">
        <Flex alignItems="center" mb={10} flexDir="column">
          <Text as={motion.h3} variants={textAnimation} custom={1} fontSize={24} fontWeight="bold" mb={5} maxW="80%">
            We are ordinary people, who are united by common interests and as
            well as the desire to improve ourselvers. As we are young developer,
            we still have a lot to achieve
          </Text>
          <Text as={motion.h3} variants={textAnimation} custom={1.5} fontSize={24} mb={15} maxW="80%">
            We don't know where this path would lead us to but we hope to
            achieve a lot
          </Text>
        </Flex>
        <Heading as={motion.h2} variants={titleAnimation} custom={2} color="black" fontSize="4xl">
          Our Team
        </Heading>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        flexWrap={"wrap"}
        spacing={{ base: 3, lg: 3 }}
        py={10}
      >
        <Card name="Pavel Lobachev" job="Tech Lead" image={Pasha} />
        <Card name="Daria Averina" job="Illustrator" image={Daria} />
        <Card name="Gabdraupov Ruslan" job="Writer" image={Ruslan} />
        <Card name="Kotovsky Gleb" job="UI UX Designer" image={Hleb} />
      </Stack>
    </Box >
  );
}

export default Team;
