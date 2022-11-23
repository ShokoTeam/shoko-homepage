import { HStack, Tag } from '@chakra-ui/react';
import React from 'react'

const BlogTags = (props) => {
  return (
    <HStack flexWrap="wrap" spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} my={1} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};


export default BlogTags 
