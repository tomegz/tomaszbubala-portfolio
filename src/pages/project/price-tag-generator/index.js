import React from 'react';
import Link from "gatsby-link";
import Socials from '../../../components/Socials';

const ProjectPriceTagGenerator = () => {
  const technologies = ["React", "Firebase"];
  return (
    <div className="project-single">
      <h1>Price Tag Generator</h1>
      <Socials />
    </div>
  );
}


export default ProjectPriceTagGenerator;