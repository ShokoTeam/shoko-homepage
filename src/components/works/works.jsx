import { Box, Flex, TabList, Tabs, VStack, TabPanel, TabPanels, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion"
import React from "react";
import AnimHeading from "../ui-components/anim-heading/AnimHeading";
import ProjectItem from "../works/ProjectItem"
import ComingSoon from "./components/coming-soon";
import CustomTab from "./tabs-motion";
import { works } from "./data.js"
import "./works.css"

import { FaReact } from 'react-icons/fa';
import * as DevIcon from "react-icons/di"
import BlogTools from './components/blog-tools';
import BlogIcon from './components/blog-icon';

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
          size="sm"
          mt="4"
        >
          <TabList
            flexWrap="wrap"
            gap={{ base: "3", sm: "0" }}
            alignItems="center"
            justifyContent="center"
          >
            <CustomTab>
              Website
            </CustomTab>
            <CustomTab>
              Design
            </CustomTab>
            <CustomTab>
              Mobile
            </CustomTab>
            <CustomTab isDisabled>
              <Tooltip hasArrow label='Coming soon' bg='blue.600' color="white">
                Desktop
              </Tooltip>
            </CustomTab>
            <CustomTab isDisabled>
              <Tooltip hasArrow label='Coming soon' bg='blue.600' color="white">
                3D
              </Tooltip>
            </CustomTab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {works.map((work, id) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                  >
                    <ProjectItem
                      title={work.title}
                      info={work.info}
                      key={work.id}
                      src={work.github}
                      image={work.image}
                    >
                      <BlogTools tools={[
                        { "icon": <BlogIcon><FaReact /></BlogIcon> },
                        { "icon": <BlogIcon><DevIcon.DiHtml5 /></BlogIcon> },
                        { "icon": <BlogIcon ><DevIcon.DiCss3 /></BlogIcon> },
                      ]}
                      />
                    </ProjectItem>
                  </motion.div>
                )
              })}
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
                <ComingSoon />
              </motion.div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}

