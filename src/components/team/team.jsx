import React from "react";
import "./team.css";

import Hleb from "../../images/StaffCats/Hleb.jpg";
import Daria from "../../images/StaffCats/artiskat.png";
import Pasha from "../../images/StaffCats/shoshi.png";
import Ruslan from "../../images/StaffCats/ruslan.jpg";

import { Heading, Text, Stack, Box, VStack, Flex } from "@chakra-ui/react";
import Card from "./../ui-components/card/card.jsx";



function Team() {
  return (
    <Box py={12} mt={8} color="black">
      <VStack spacing={2} alignItems="center" textAlign="center">
        <Flex alignItems="center" mb={10} flexDir="column">
          <Text fontSize={24} fontWeight="bold" mb={5} maxW="80%">
            We are ordinary people, who are united by common interests and as
            well as the desire to improve ourselvers. As we are young developer,
            we still have a lot to achieve
          </Text>
          <Text fontSize={24} mb={15} maxW="80%">
            We don't know where this path would lead us to but we hope to
            achieve a lot
          </Text>
        </Flex>
        <Heading color="black" as="h1" fontSize="4xl">
          Our Team
        </Heading>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
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
