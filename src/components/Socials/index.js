import React from "react";


import FaGithub from 'react-icons/lib/fa/github';
import FaStackOverflow from 'react-icons/lib/fa/stack-overflow';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope'

const Socials = props => {
  const github = "https://github.com/tomegz";
  const linkedin = "https://www.linkedin.com/in/tomasz-buba%C5%82a-55790b145/";
  const stackoverflow = "https://stackoverflow.com/users/7475314/tomasz-buba%c5%82a?tab=profile";
  const mailto = "mailto:tomaszbubala37@gmail.com";
  return (
    <div className="socials">
      <ul className="social-icons">
        <li>
          <a href={github} target="_blank"><FaGithub /></a>
        </li>
        <li>
          <a href={stackoverflow} target="_blank"><FaStackOverflow /></a>
        </li>
        <li>
          <a href={linkedin} target="_blank"><FaLinkedIn /></a>
        </li>
        <li>
          <a href={mailto}><FaEnvelope /></a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;