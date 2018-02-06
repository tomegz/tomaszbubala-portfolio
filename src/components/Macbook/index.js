import React from "react";
import imgSrc from "./img/macbook.png";

const Macbook = ({children}) => (
  <div className="macbook-wrapper">
    <div className="macbook">
      <img src={imgSrc} className="macbook-img" alt="Macbook" />
      <div className="macbook-content">
        {children}
      </div>
    </div>
  </div>
);

export default Macbook;