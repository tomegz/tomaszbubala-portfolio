import React from 'react';
import Link from "gatsby-link";
import Socials from '../../../components/Socials';

const Project3dEstate = () => {
  const technologies = ["A-Frame", "Three.js", "Node.js", "MongoDB", "Pug", "Sass"];
  return (
    <div className="project-single">
      <h1>3d Estate</h1>
      <Socials />
    </div>
  );
}

export default Project3dEstate;