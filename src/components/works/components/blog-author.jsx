import React from 'react'
import { HStack, Image, Text, Flex } from '@chakra-ui/react';

const BlogAuthor = (props) => {
  return (
    <HStack
      color="black"
      mt={5}
      spacing="2"
      display="flex"
      alignItems="center"
    >
      <Flex
        backgroundColor="blue.300"
        boxSize="60px"
        borderRadius="full"
        alignItems="center"
        justifyContent='center'
      >
        <Image
          borderRadius="full"
          boxSize="55px"
          src={props.image}
          alt={`Avatar of ${props.name}`}
        />
      </Flex>
      <Flex flexDir="column" fontSize="lg" >
        <Text fontWeight="bold">{props.name}</Text>
        <Text fontWeight="medium">{props.role}</Text>
      </Flex>
    </HStack>
  );
};


export default BlogAuthor
