import React from 'react'
import { Flex, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"

const titleAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

const AnimHeading = ({ children, custom, color }) => {
  return (
    <Flex
      as={motion.div}
      alignItems="center"
      justifyContent='center'
    >
      <Heading alignItems="center" as={motion.h2} variants={titleAnimation} custom={custom} color={color} fontSize="4xl">
        {children}
      </Heading>
    </Flex>
  )
}

export default AnimHeading
