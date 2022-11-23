import { Image } from '@chakra-ui/react'
import React from 'react'

const ProjectImage = () => {
  return (
    <Image
      m={0}
      transform="scale(1.0)"
      borderRadius="lg"
      objectFit="contain"
      alt="some good alt text"
      src={
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
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
