import React from "react";
import "./PassManager.css";
import barIcon from "../../images/06/appbar/burger_menu.png";
import passManager from "../../images/06/Group/passmanager.png";
import profileImg from "../../images/06/Group/profile.png";
import searchImg from "../../images/06/Group/search.png";
import syncImg from "../../images/06/Group/syncicn.png";
import pathIcon from "../../images/07/Group7/Path.png";
import addbtn from "../../images/addbtn.png";

function PassManager() {
  return (
    <div className="passManager-main">
      <div className="header">
        <div className="header-1">
          <img className="header-img" src={barIcon}></img>
          <img className="header-img2" src={passManager}></img>
        </div>

        <div className="header-2">
          <img className="header-img3" src={searchImg}></img>
          <img className="header-img3" src={syncImg}></img>
          <img className="header-img3" src={profileImg}></img>
        </div>
      </div>
      <div className="sub-header">
        <p className="sites-text">Sites</p>
        <div className="sites-border"></div>
        <div className="sub-header-1">
          Social Media
          <div className="circle">07</div>
          <img className="path-img" src={pathIcon}></img>
        </div>
      </div>
      <img className="addSite-Btn" src={addbtn}></img>
    </div>
  );
}

export default PassManager;
