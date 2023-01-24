import React from "react";
import Logo from "../assets/Logo.png";
import "../styles/ButtonsStore.scss";
import Text1 from "../assets/text1.png";
import GooglePlay from "../assets/GooglePlay.png";
import AppStore from "../assets/AppStore.png";
import DescargatelaYa from "../assets/DescargatelaYa.png";

const ButtonsStore = () => {
  return (
    <div className="secondTitle">
      <img src={Logo} alt="logo" className="logo"></img>
      <img src={Text1} alt="text1" className="text1"></img>
      <img src={GooglePlay} alt="googlePlay" className="googlePlay"></img>
      <img src={AppStore} alt="appStore" className="appStore"></img>
      <img
        src={DescargatelaYa}
        alt="descargatelaYa"
        className="descargatelaYa"
      ></img>
    </div>
  );
};

export default ButtonsStore;
