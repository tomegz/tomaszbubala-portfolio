import React from "react";

const TechStack = (props) => {
  const { technologies } = props;
  return (
    <div className="tech-stack-wrapper">
      <h2>Technology stack:</h2>
      <ul className="tech-stack-list">
        {technologies.map((tech, i) => <li key={i} className="tech-stack-single">{tech}</li>)}
      </ul>
    </div>
  );
}

export default TechStack;