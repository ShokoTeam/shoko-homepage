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
            <ProjectImage />
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
          marginLeft="5"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Design', 'Development', 'test', 'test']} />
          <Heading mt={4}>
            <Link
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
              color="black"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}>
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
