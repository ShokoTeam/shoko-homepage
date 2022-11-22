import React from "react";
import AnimHeading from "../ui-components/anim-heading/AnimHeading";
import Showcase from "./Showcase";
import "./works.css"


export default function Works() {
  return (
    <div className='works__section'>
      <AnimHeading custom={2} color="black">
        We built
      </AnimHeading>
      <div className="wrapper">
        <Showcase />
      </div>
    </div>
  );
}
