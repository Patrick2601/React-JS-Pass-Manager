import React from "react";
import "./PassManager.css";
import barIcon from "../../images/06/appbar/burger_menu.png";
import passManager from "../../images/06/Group/passmanager.png";
import profileImg from "../../images/06/Group/profile.png";
import searchImg from "../../images/06/Group/search.png";
import syncImg from "../../images/06/Group/syncicn.png";
import pathIcon from "../../images/07/Group7/Path.png";
import addbtn from "../../images/addbtn.png";
import barIcon2 from "../../images2/02/Side_menu/burger_Menu.png";
import home from "../../images2/02/Side_menu/home_icn.png";
import webHeaderImg from "../../images2/02/Header/logo.png";
import profileWeb from "../../images2/02/Header/profile.png";
import syncWeb from "../../images2/02/Header/sync.png";

function PassManager() {
  return (
    <div className="passManager-main">
      {/* ------------------------------------------MOBILE-VIEW------------------------------------------------ */}
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
      {/* ------------------------------------------MOBILE-VIEW------------------------------------------------ */}
      {/* ------------------------------------------WEB-VIEW------------------------------------------------ */}

      <div className="web-sideBar">
        <img className="header-img" src={barIcon2} />
        <img className="home-img" src={home} />
        <div className="home-border"></div>
        <div className="home-circle"></div>
      </div>

      <div className="web-header">
        <img src={webHeaderImg} />
        <div>
          <img src={syncWeb} />
          <img src={profileWeb} />
        </div>
      </div>
      {/* ------------------------------------------WEB-VIEW------------------------------------------------ */}
    </div>
  );
}

export default PassManager;
