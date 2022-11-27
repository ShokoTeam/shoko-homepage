import { Image, Text, VStack } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import JabCat from "../../../images/coming-soon.png"

export default function ComingSoon() {
  return (
    <VStack justifyContent="center" textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={'50px'} color={'blue.600'} />
      <Text
        as="h2"
        mt={6}
        mb={2}
        bgGradient='linear(to-l, #7083CF, #5F1DC2)'
        bgClip='text'
        fontSize='2xl'
        fontWeight='extrabold'
      >
        Coders at Work
      </Text>

      <Text size="xl" mb={2}>
        - Coming Soon -
      </Text>
      <Image
        h={180}
        w={310}
        src={JabCat}
        alt="working cat"
      />
    </VStack>
  );
}
