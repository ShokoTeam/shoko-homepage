import React from "react"
import { Link, useColorModeValue } from "@chakra-ui/react";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.700', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);


export default NavLink
