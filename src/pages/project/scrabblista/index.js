import React from 'react';
import Link from "gatsby-link";
import Iphone from '../../../components/Iphone';
import Macbook from '../../../components/Macbook';
import Carousel from '../../../components/Carousel';
import TechStack from '../../../components/TechStack';
import Socials from '../../../components/Socials';

const mobileImages = [
  { src: require("./img/scrabblista-mobile-1.png") },
  { src: require("./img/scrabblista-mobile-2.png") },
  { src: require("./img/scrabblista-mobile-3.png") },
  { src: require("./img/scrabblista-mobile-4.png") }
];
const desktopImages = [
  { src: require("./img/scrabblista-desktop-1.png") },
  { src: require("./img/scrabblista-desktop-2.png") },
  { src: require("./img/scrabblista-desktop-3.png") }
];

const ProjectScrabblista = () => {
  const technologies = ["Ruby on Rails", "Ruby", "JavaScript"];
  return (
    <div className="project-single">
      <h1>Scrabblista</h1>
      <div className="project-inner">
        <div className="project-media">
          <Iphone>
            <Carousel images={mobileImages} />
          </Iphone>
        </div>
        <div className="project-description">
          <h2>Project</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tincidunt ligula, ut tristique elit. Phasellus in pharetra sapien. Ut pulvinar a sem sed tempus. Sed porttitor, mauris ut congue tristique, libero risus cursus velit, id ultrices est odio at augue. Pellentesque non feugiat nisl. Donec diam nisi, porttitor nec elementum nec, pharetra a leo. Quisque sit amet diam fringilla elit condimentum ornare. Curabitur rhoncus nulla vel velit commodo egestas. Vestibulum non rhoncus lacus. Mauris augue augue, rutrum vel enim vitae, pharetra hendrerit purus. </p>
          <TechStack technologies={technologies} />
        </div>
        <div className="project-media-large">
          <Macbook>
            <Carousel images={desktopImages} />
          </Macbook>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default ProjectScrabblista;