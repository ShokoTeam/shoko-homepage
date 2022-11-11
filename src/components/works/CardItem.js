import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";

function CardItem() {
  const devStask = ["Mobile", "Web", "UX UI"];

  return (
    <Box>
      <Box maxW="420px" bg="white" p="6">
        <Image
          src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt="Fores"
          borderRadius="xl"
          objectFit="cover"
          mx="auto"
        />
        <HStack mt="5" spacing="3">
          {devStask.map((item) => (
            <Tag key={item} variant="outline">
              {item}
            </Tag>
          ))}
        </HStack>
        <Heading my="4" size="lg" color="black">
          Fores
        </Heading>
        <Text>Some text there about Fores</Text>
        <Button></Button>
      </Box>
    </Box>
  );
}

export default CardItem;
