import { Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion"

export const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

const AnimText = ({ children }) => {
  return (
    <Text as={motion.h3} variants={textAnimation} custom={1} fontSize={24} fontWeight="bold" mb={5} maxW="1240px">
      {children}
    </Text>
  )
}

export default AnimText
