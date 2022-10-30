import { Flex } from "@chakra-ui/react";
import React from "react";

const IconsBox = ({ children }) => {
  return (
    <Flex display="flex" flexWrap="wrap" gap={4}>
      {children}
    </Flex>
  );
};
export default IconsBox;
