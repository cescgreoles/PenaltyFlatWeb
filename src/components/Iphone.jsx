import React from "react";
import iphone from "../assets/iphone13.png";
import "../styles/Iphone.scss";

const Iphone = () => {
  return (
    <div className="iphone">
      <img src={iphone} className="iphone" />
    </div>
  );
};

export default Iphone;
