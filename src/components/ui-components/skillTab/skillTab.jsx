import React from "react";
import {
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Center,
  Box,
  Flex,
} from "@chakra-ui/react";

import { IconContext } from "react-icons";
import { AiOutlineMobile } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiVite,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiMysql,
  SiExpo,
  SiFirebase,
  SiUnity,
  SiBlender,
  SiCplusplus,
  SiWebgl,
} from "react-icons/si";
import { FaNode, FaSass, FaReact } from "react-icons/fa";
import { DiBrackets, DiAndroid } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

const SkillTab = () => {
  return (
    <Center>
      <Tabs
        maxW={320}
        variant="unstyled"
        padding={10}
        borderRadius={15}
        justifyContent="center"
      >
        <TabList mt={20}>
          <Tab _selected={{ color: "white", bg: "#333" }} h={54} w={125}>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: 18,
                alignItems: "center",
              }}
            >
              <BsGlobe />
            </IconContext.Provider>
            <Box fontSize={15} ml={5}>
              Web
            </Box>
          </Tab>
          <Tab _selected={{ color: "white", bg: "#333" }} h={54} w={125}>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: 18,
                alignItems: "center",
              }}
            >
              <AiOutlineMobile />
            </IconContext.Provider>
            <Box fontSize={15} ml={5}>
              Mobile
            </Box>
          </Tab>

          <Tab _selected={{ color: "white", bg: "#333" }} h={54} w={125}>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: 18,
                alignItems: "center",
              }}
            >
              <IoGameController />
            </IconContext.Provider>
            <Box fontSize={15} ml={5}>
              Games
            </Box>
          </Tab>
        </TabList>
        <TabPanels mt="5rem">
          <TabPanel>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: 50,
                alignItems: "center",
              }}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyItems="center"
                gap={40}
              >
                <Box display="flex" gap={60} alignItems="center">
                  <SiHtml5 />
                  <SiTailwindcss />
                  <FaSass />
                </Box>

                <Box display="flex" gap={60} alignItems="center">
                  <FaNode />
                  <FaReact />
                  <SiRedux />
                </Box>

                <Box display="flex" gap={60} alignItems="center">
                  <SiNextdotjs />
                  <SiVite />
                  <SiTypescript />
                </Box>
              </Flex>
            </IconContext.Provider>
          </TabPanel>

          <TabPanel>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: 50,
                alignItems: "center",
              }}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyItems="center"
                gap={40}
              >
                <Box display="flex" gap={60} alignItems="center">
                  <SiFlutter />
                  <SiDart />
                  <DiBrackets />
                </Box>

                <Box display="flex" gap={60} alignItems="center">
                  <TbBrandReactNative />
                  <DiAndroid />
                  <SiMysql />
                </Box>

                <Box display="flex" gap={60} alignItems="center">
                  <SiExpo />
                  <SiFirebase />
                </Box>
              </Flex>
            </IconContext.Provider>
          </TabPanel>

          <TabPanel>
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: 50,
                alignItems: "center",
              }}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyItems="center"
                gap={40}
              >
                <Box display="flex" gap={60} alignItems="center">
                  <SiUnity />
                  <SiBlender />
                  <SiCplusplus />
                </Box>

                <Box display="flex" gap={60} alignItems="center">
                  <SiWebgl />
                </Box>
              </Flex>
            </IconContext.Provider>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default SkillTab;
