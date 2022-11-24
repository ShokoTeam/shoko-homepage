import React from 'react';

import { IconContext } from 'react-icons';


const BlogIcon = (props) => {
  return (
    <IconContext.Provider
      value={{
        color: "black",
        style: { height: 22, width: 22, color: `${props.color}` }
      }}>
      {props.children}
    </IconContext.Provider >
  )
}

export default BlogIcon
