import React from "react";
import "./skills.css";

import SkillTab from "../ui-components/skillTab/skillTab.jsx";

const skills = () => {
  return (
    <div className="skills__container">
      <h1 className="skills__heading">Our Stack</h1>
      <SkillTab />
    </div>
  );
};

export default skills;
