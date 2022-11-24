import { Image } from '@chakra-ui/react'
import React from 'react'

const ProjectImage = (props) => {
  return (
    <Image
      m={0}
      transform="scale(1.0)"
      borderRadius="lg"
      objectFit="contain"
      alt="some good alt text"
      src={
        props.src
      }
      transition="0.5s ease-in-out"
      _hover={{
        transform: 'scale(1.03)',
        bg: "#171717"
      }}
    />
  )
}

export default ProjectImage
