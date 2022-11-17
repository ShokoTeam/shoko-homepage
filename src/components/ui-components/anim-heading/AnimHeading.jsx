import React from 'react'
import { Heading } from "@chakra-ui/react"
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

const AnimHeading = ({ children, custom }) => {
  return (
    <motion.div>
      <Heading as={motion.h2} variants={titleAnimation} custom={custom} color="black" fontSize="4xl">
        {children}
      </Heading>
    </motion.div>
  )
}

export default AnimHeading
