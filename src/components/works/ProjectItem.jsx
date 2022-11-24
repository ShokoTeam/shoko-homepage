import React from 'react';
import {
  Box,
  Heading,
  Link,
  Text,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

import PashaImage from "../../images/StaffCats/shoshi.png"
import ProjectImage from './components/project-image';
import BlogTags from './components/blog-tags';
import BlogAuthor from './components/blog-author';
import BlogTools from './components/blog-tools';
import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from "react-icons/ai"




const ProjectItem = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '3' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"

        alignItems="center"
      >
        <Box
          display="flex"
          flex="1"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
            overflow="hidden"
          >
            <ProjectImage src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" />
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
          textAlign="start"
          justifyContent="center"
          // marginLeft="5"

          marginLeft={{ base: '0', sm: '5' }}
          marginTop={{ base: '2', sm: '3' }}
        >
          <BlogTags tags={[
            { "scheme": 'green', "type": "Website" },
            { "scheme": 'purple', "type": "Design" },
          ]}
          />
          <BlogTools tools={[
            { "scheme": 'blue', "icon": <FaReact color='black' /> },
            { "scheme": 'orange', "icon": <AiFillHtml5 /> },
          ]}
          />
          <Heading mt={4} textAlign={{ base: "center", md: "start" }}>
            <Link
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
              color="black"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
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
          <BlogAuthor name="Pasha" role="Tech Lead" image={PashaImage} />
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectItem;
