import React from "react";
import {
  Box,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from "react-router-dom"

import "./footer.css";

import Logo from "../../images/logo_white.png";


export default function Footer() {
  return (
    <Box
      bg='gray.750'
      color={useColorModeValue('white', 'gray.100')}
      mt={8}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={3}
        justify={'center'}
        align={'center'}
        direction={{ base: 'column', md: 'row-reverse' }}
      >
        <Stack
          my={4}
          fontSize={{ base: "14px", md: "16px" }}
          direction={{ base: 'row', sm: 'row' }}
          spacing={4}
          align="center"
          justifyContent="center"
        >
          <Link to={'/'}>
            Home
          </Link>
          <a href='https://github.com/ShokoTeam'>
            Github
          </a>
          <a
            target="_blank"
            href={'https://boosty.to/shokoteam'}>
            Donate
          </a>
          <Link to={'/privacy'}>
            Privacy
          </Link>
        </Stack>
        <img
          src={Logo}
          alt="shoko"
          className="footer__logo"
        />
      </Container>
    </Box>
  );
}
