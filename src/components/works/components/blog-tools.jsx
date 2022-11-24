import { HStack, Tag } from '@chakra-ui/react';
import React from 'react'

const BlogTools = (props) => {
  return (
    <HStack
      flexWrap="wrap"
      spacing={2}
    >
      {props.tools.map((value, key) => {
        return (
          <Tag size={'lg'} my={1} variant="solid" colorScheme={value.scheme} key={key}>
            {value.icon}
          </Tag>
        );
      })}
    </HStack>
  );
};


export default BlogTools

