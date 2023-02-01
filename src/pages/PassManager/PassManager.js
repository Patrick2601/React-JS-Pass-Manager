import React from "react";
import "./PassManager.css";
import barIcon from "../../images/06/appbar/burger_menu.png";
import passManager from "../../images/06/Group/passmanager.png";
import profileImg from "../../images/06/Group/profile.png";
import searchImg from "../../images/06/Group/search.png";
import syncImg from "../../images/06/Group/syncicn.png";

function PassManager() {
  return (
    <div>
      <div className="header">
        <div className="header-1">
          <img className="header-img" src={barIcon}></img>
          <img className="header-img2" src={passManager}></img>
        </div>

        <div className="header-2">
          <img  className="header-img3"src={searchImg}></img>
          <img  className="header-img3"src={syncImg}></img>
          <img  className="header-img3"src={profileImg}></img>
        </div>
      </div>
    </div>
  );
}

export default PassManager;
