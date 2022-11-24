import React from "react"
import { Box, Button, useTab, useMultiStyleConfig, } from "@chakra-ui/react"

const CustomTab = React.forwardRef((props, ref) => {
  const tabProps = useTab({ ...props, ref })
  const isSelected = !!tabProps['aria-selected']

  const styles = useMultiStyleConfig('Tabs', tabProps)

  return (
    <Button __css={styles.tab} {...tabProps}>
      <Box as='span' mr='2'>
        {isSelected ? '😎' : '😐'}
      </Box>
      {tabProps.children}
    </Button>
  )
})


export default CustomTab
