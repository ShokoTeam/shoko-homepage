import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Flex,
} from '@chakra-ui/react';

import PashaImage from "../../images/StaffCats/shoshi.png"

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};


export const BlogAuthor = (props) => {
  return (
    <HStack color="black" mt={5} spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.image}
        alt={`Avatar of ${props.name}`}
      />
      <Flex flexDir="column">
        <Text fontWeight="bold">{props.name}</Text>
        <Text fontWeight="medium">{props.role}</Text>
      </Flex>
    </HStack>
  );
};

const ProjectItem = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
            overflow="hidden"
          >
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                transform="scale(1.0)"
                borderRadius="lg"
                objectFit="contain"
                alt="some good alt text"
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
                transition="0.5s ease-in-out"
                _hover={{
                  transform: 'scale(1.03)',
                  bg: "#171717"
                }}

              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(blue.300 1px, transparent 1px)',
                'radial(purple.600 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Design', 'Development']} />
          <Heading mt={4}>
            <Link color="black" textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Blog article title
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color='black'
            fontSize={{ base: "15px", md: "lg" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <BlogAuthor name="Pasha" role="Tech Lead" image={PashaImage} date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectItem;
