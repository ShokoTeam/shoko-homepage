import { Image, Link } from '@chakra-ui/react'
import React from 'react'

const ProjectImage = (props) => {
  return (

    <Link href={props.href} alt="project" >
      <Image
        maxH={"560px"}
        w={"100%"}
        m={0}
        borderRadius="2xl"
        objectFit="contain"
        alt="some good alt text"
        src={
          props.src
        }
        transition="0.5s ease-in-out"
        _hover={{
        }}
      />
    </Link>
  )
}

export default ProjectImage
