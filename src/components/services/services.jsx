import React from "react"
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

import "./services.css"

import { IconContext } from 'react-icons';
import { FaDesktop } from "react-icons/fa"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import { MdDraw } from "react-icons/md"

function ServicesWrapper({ children, backgroundColor }) {
  return (
    <Box
      h={440}
      w={280}
      shadow="base"
      backgroundColor={backgroundColor}
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

      <Flex
        bgGradient='linear(to-tl, #0F346E, #ED2D87)'
        backgroundColor={useColorModeValue('tan', '#22273A')}
        direction={{ base: 'column', md: 'row-reverse' }}
        textAlign="center"
        justify="center"
        alignItems="center"
        flexWrap='wrap'
        gap={{ base: "4", lg: "10" }}
        py={28}
      >


        <ServicesWrapper
          backgroundColor='#17173d'
        >
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
                  <HiOutlineDevicePhoneMobile />
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
              Mobile development is like a hobby for us, a hobby which we accomplish well.
            </Text>
          </Flex>
        </ServicesWrapper>

        <ServicesWrapper
          backgroundColor='#22273A'
        >
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
              Website development is one of our main areas of expertise, because websites are always needed by everyone.
            </Text>
          </Flex>
        </ServicesWrapper>



        <ServicesWrapper
          backgroundColor='#17173d'
        >
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
                  <MdDraw />
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
              Design is needed for all of our projects. We try to make it comfortable and pleasant for the eyes, and most importantly - functional.
            </Text>
          </Flex>
        </ServicesWrapper>
      </Flex>
    </Box>
  );
}
