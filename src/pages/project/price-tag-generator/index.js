import React from 'react';
import Link from "gatsby-link";
import Macbook from '../../../components/Macbook';
import Carousel from '../../../components/Carousel';
import TechStack from '../../../components/TechStack';
import Socials from '../../../components/Socials';

const desktopImages = [
  { src: require("./img/price-tag-generator-desktop-1.png") },
  { src: require("./img/price-tag-generator-desktop-2.png") },
  { src: require("./img/price-tag-generator-desktop-3.png") },
  { src: require("./img/price-tag-generator-desktop-4.png") },
  { src: require("./img/price-tag-generator-desktop-5.png") }
];

const ProjectPriceTagGenerator = () => {
  const technologies = ["React", "Firebase"];
  return (
    <div className="project-single">
      <h1>Price Tag Generator</h1>
      <div className="project-inner">
        <div className="project-media-large">
          <Macbook>
            <Carousel images={desktopImages} />
          </Macbook>
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


export default ProjectPriceTagGenerator;