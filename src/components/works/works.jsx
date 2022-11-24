import { Box, Flex, TabList, Tabs, VStack, TabPanel, TabPanels } from "@chakra-ui/react";
import { motion } from "framer-motion"
import React from "react";
import AnimHeading from "../ui-components/anim-heading/AnimHeading";
import ProjectItem from "../works/ProjectItem"
import CustomTab from "./tabs-motion";
import "./works.css"


export default function Works() {
  return (
    <Box
      pt={12}
      my={8}
    >
      <VStack spacing={2} textAlign="center" >
        <AnimHeading color="black" custom={2}>
          Projects
        </AnimHeading>
      </VStack>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        alignItems="center"
        flexWrap='wrap'
        color="black"
        gap={{ base: "4", lg: "10" }}
      >
        <Tabs
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          isLazy
          mt="4"
        >
          <TabList>
            <CustomTab>
              Web
            </CustomTab>
            <CustomTab>
              Design
            </CustomTab>
            <CustomTab>
              3D
            </CustomTab>
          </TabList>
          <TabPanels>

            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <ProjectItem />
              </motion.div>
            </TabPanel>


            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <ProjectItem />
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <ProjectItem />
              </motion.div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}

