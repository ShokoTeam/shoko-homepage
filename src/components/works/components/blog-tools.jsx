import { HStack, Tag } from '@chakra-ui/react';
import React from 'react'

const BlogTools = (props) => {
  return (
    <HStack
      flexWrap="wrap"
      spacing={2}
      justifyContent={{base: "center", sm: "start"}}
    >
      {props.tools.map((value, key) => {
        return (
          <Tag size={'lg'} my={1} p={2} variant="solid" alignItems='center' justifyContent='center' colorScheme={value.scheme} key={key}>
            {value.icon}
          </Tag>
        );
      })}
    </HStack>
  );
};


export default BlogTools

