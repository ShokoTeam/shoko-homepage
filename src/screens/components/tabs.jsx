import React from 'react'
import { Box, Flex, TabList, TabPanel, TabPanels, Tabs, Tooltip } from "@chakra-ui/react";
import CustomTab from '../../components/works/tabs-motion';
import AnimHeading from '../../components/atoms/anim-heading/AnimHeading';
import AnimText from '../../components/atoms/anim-text/AnimText';
import ComingSoon from '../../components/works/components/coming-soon';
import Homepage from "./project/homepage.jsx"


const PrivacyTabs = () => {

  return (
    <Flex
      pt={8}
      mt={10}
      direction={{ base: 'column', md: 'row' }}
      textAlign="center"
      flexWrap='wrap'
      gap={{ base: "4", lg: "10" }}
    >
      <Tabs
        variant="unstyled"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        w={{ base: "310px", sm: "768px" }}
        isLazy
        size="sm"
        mt="4"
      >
        <TabList
          flexWrap="wrap"
          gap={{ base: "3", sm: "6" }}
        >
          <CustomTab>
            Homepage
          </CustomTab>
          <CustomTab>
            Fores
          </CustomTab>
          <CustomTab isDisabled>
            <Tooltip hasArrow label='Coming soon' bg='blue.600' color="white">
              Coming Soon
            </Tooltip>
          </CustomTab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box mt={5}>
              <AnimHeading alignText="center" custom={2}>
                Политика в отношении обработки персональных данных
              </AnimHeading>
              <Homepage />
            </Box>
          </TabPanel>

          <TabPanel>
            <Box mt={5}>
              <AnimHeading alignText="center" custom={2}>
                Hello
              </AnimHeading>
              <AnimText custom={3}>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
              </AnimText>
            </Box>
          </TabPanel>
          <TabPanel>
            <ComingSoon />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default PrivacyTabs
