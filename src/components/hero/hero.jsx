import React from "react";
import { Parallax } from "react-parallax";

const hero = () => {
  return (
    <div className="wrapper">
      <Parallax
        bgImage={require("../../images/Bongo-Jams.gif")}
        bgImageAlt="Not found"
        strength={400}
      >
        <div style={{ height: 1000 }}></div>
      </Parallax>
    </div>
  );
};

export default hero;
