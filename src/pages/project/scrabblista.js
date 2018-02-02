import React from 'react';
import Link from "gatsby-link";
import Iphone from '../../components/Iphone';
import TechStack from '../../components/TechStack';
import Socials from '../../components/Socials';

const ProjectScrabblista = () => {
  const technologies = ["Ruby on Rails", "Ruby", "JavaScript"];
  return (
    <div className="project-single">
      <h1>Scrabblista</h1>
      <div className="project-inner">
        <div className="project-media">
          <Iphone>
            <div></div>
          </Iphone>
        </div>
        <div className="project-description">
          <h2>Project</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tincidunt ligula, ut tristique elit. Phasellus in pharetra sapien. Ut pulvinar a sem sed tempus. Sed porttitor, mauris ut congue tristique, libero risus cursus velit, id ultrices est odio at augue. Pellentesque non feugiat nisl. Donec diam nisi, porttitor nec elementum nec, pharetra a leo. Quisque sit amet diam fringilla elit condimentum ornare. Curabitur rhoncus nulla vel velit commodo egestas. Vestibulum non rhoncus lacus. Mauris augue augue, rutrum vel enim vitae, pharetra hendrerit purus. </p>
          <TechStack technologies={technologies} />
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default ProjectScrabblista;