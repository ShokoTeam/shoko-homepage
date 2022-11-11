import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { IconContext } from 'react-icons';
import "./skills.css"

import { FaDesktop } from "react-icons/fa"


function ServicesWrapper({ children }) {
  return (
    <Box
      mb={4}
      w={280}
      h={340}
      shadow="base"
      backgroundColor={useColorModeValue('blue.300', '#17173d')}
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierSevices() {
  return (
    <Box py={12} mt={8} >

      <VStack spacing={2} textAlign="center" >
        <Heading color="black" as="h1" fontSize="4xl" mb={8}>
          Services
        </Heading>
      </VStack>

      <Stack
        bgGradient='linear(to-tl, #0F346E, #ED2D87)'
        backgroundColor={useColorModeValue('tan', '#22273A')}
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
        mt={7}
      >
        <ServicesWrapper>
          <Box position="relative"
          >
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>

              <Text
                textTransform="uppercase"
                bg="white"
                px={2}
                py={2}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                <IconContext.Provider
                  value={{
                    className: "icons",
                    size: 45,
                    alignItems: "center",
                    color: "black"
                  }}
                >
                  <FaDesktop />
                </IconContext.Provider>

              </Text>

            </Box>

          </Box>

          <Flex
            position="relative"
            top="35%"
            flexDir="column"
            alignItems="center"
          >
            <Text fontSize={24} fontWeight="bold" >
              Web
            </Text>
            <Text textAlign="center" maxW="80%" mt={4}>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </Text>
          </Flex>
        </ServicesWrapper>


        <ServicesWrapper>
          <Box position="relative"
          >
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>

              <Text
                textTransform="uppercase"
                bg="white"
                px={2}
                py={2}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                <IconContext.Provider
                  value={{
                    className: "icons",
                    size: 45,
                    alignItems: "center",
                    color: "black"
                  }}
                >
                  <FaDesktop />
                </IconContext.Provider>

              </Text>

            </Box>

          </Box>

          <Flex
            position="relative"
            top="35%"
            flexDir="column"
            alignItems="center"
          >
            <Text fontSize={24} fontWeight="bold" >
              Mobile
            </Text>
            <Text textAlign="center" maxW="80%" mt={4}>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </Text>
          </Flex>
        </ServicesWrapper>


        <ServicesWrapper>
          <Box position="relative"
          >
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>

              <Text
                textTransform="uppercase"
                bg="white"
                px={2}
                py={2}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                <IconContext.Provider
                  value={{
                    className: "icons",
                    size: 45,
                    alignItems: "center",
                    color: "black"
                  }}
                >
                  <FaDesktop />
                </IconContext.Provider>

              </Text>

            </Box>

          </Box>

          <Flex
            position="relative"
            top="35%"
            flexDir="column"
            alignItems="center"
          >
            <Text fontSize={24} fontWeight="bold" maxW="80%" >
              UX / UI Design
            </Text>
            <Text textAlign="center" maxW="80%" mt={4}>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </Text>
          </Flex>
        </ServicesWrapper>
      </Stack>
    </Box>
  );
}
