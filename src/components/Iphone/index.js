import React from "react";
import imgSrc from "./img/iphone.png";

const Iphone = ({children}) => (
  <div className="iphone-wrapper">
    <div className="iphone">
      <img src={imgSrc} className="iphone-img" alt="Iphone" />
      <div className="iphone-content">
        {children}
      </div>
    </div>
  </div>
);

export default Iphone;