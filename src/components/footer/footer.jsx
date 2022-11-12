import React from "react";
import "./footer.css";
import Logo from "../../images/logo_white.png";
import {
  Box,
  Container,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';


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
        spacing={4}
        justify={'center'}
        align={'center'}
        direction={{ base: 'column', md: 'row-reverse' }}
      >

        <Stack direction={'row'} spacing={6} alignItems="center" justifyContent="center">
          <Link href={'#'}>Home</Link>
          <Link href={'https://github.com/ShokoTeam'}>Github</Link>
          <Link href={'#'}>Donate</Link>
          <Link href={'#'}>Privacy Policy</Link>
        </Stack>
        <img src={Logo} alt="shoko" className="footer__logo" />
      </Container>
    </Box>
  );
}
