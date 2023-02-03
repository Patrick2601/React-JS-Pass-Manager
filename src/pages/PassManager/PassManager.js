import React, { useRef, useState } from "react";
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
import searchWebIcon from "../../images2/02/search_icn/search.png";
import fb from "../../images2/02/01c/Bitmap.png";
import copyIcon from "../../images2/02/01/Group 6/Bitmap.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddSiteSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  mpin: Yup.string()
    .min(4, "Too Short!")
    .max(4, "Too Long!")
    .required("Required"),
});
function PassManager() {
  const [modal, setModal] = useState(false);
  const formik = useFormik({
    initialValues: {
      url: "",
      sitename: "",
      sector: "",
      username: "",
      sitename: "",
      notes: "",
    },
    validationSchema: AddSiteSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
          <img className="path-img" src={pathIcon} />
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-innerDiv1">
            <img src={fb} />
            <div>
              <p>Facebook</p>
              <img src={copyIcon} />
              <span>Copy Password</span>
            </div>
          </div>
          <p className="website-text">www.www.www</p>
        </div>
        <div className="card">
          <div className="card-innerDiv1">
            <img src={fb} />
            <div>
              <p>Facebook</p>
              <img src={copyIcon} />
              <span>Copy Password</span>
            </div>
          </div>
          <p className="website-text">www.www.www</p>
        </div>
        <div className="card">
          <div className="card-innerDiv1">
            <img src={fb} />
            <div>
              <p>Facebook</p>
              <img src={copyIcon} />
              <span>Copy Password</span>
            </div>
          </div>
          <p className="website-text">www.www.www</p>
        </div>
        <div className="card">
          <div className="card-innerDiv1">
            <img src={fb} />
            <div>
              <p>Facebook</p>
              <img src={copyIcon} />
              <span>Copy Password</span>
            </div>
          </div>
          <p className="website-text">www.www.www</p>
        </div>
      </div>

      <img
        onClick={() => {
          setModal(!modal);
        }}
        className="addSite-Btn"
        src={addbtn}
      ></img>
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

        <div className="search-bar">
          <input
            autoComplete="off"
            className="search-input"
            type="text"
            placeholder="Search"
          />
          <img src={searchWebIcon} />
        </div>
      </div>
      {/* ------------------------------------------WEB-VIEW------------------------------------------------ */}
      {/* ------------------------------------------MODAL-VIEW------------------------------------------------ */}
      {modal ? (
        <modal className="addSite-modal">
          <form onSubmit={formik.handleSubmit}>
            <div className="modal-container">
              <img
                onClick={() => {
                  setModal(!modal);
                }}
                className="cancel-Btn"
                src={addbtn}
              ></img>
              <p className="addSite-text">Add Site</p>
              <label className="label">URL</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.url}
                className="addsite-input"
              />
              {/* <div className="wrap-div"> */}
              <label className="label">Site Name</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.sitename}
                className="addsite-input"
              />
              <label className="label">Sector/Folder</label>
              {/* <input className="addsite-input" /> */}
              <select
                onChange={formik.handleChange}
                value={formik.values.sector}
                className="addsite-input"
                name="cars"
                id="cars"
              >
                <option value="volvo" selected>
                  Social Media
                </option>
                <option value="saab">Websites</option>
              </select>
              {/* </div> */}
              <label className="label">User Name</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.username}
                className="addsite-input"
              />
              <label className="label">Site Password</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                className="addsite-input"
              />
              <label className="label">Notes</label>
              <textarea
                onChange={formik.handleChange}
                value={formik.values.notes}
                className="addsite-input"
              />
              <div className="btns-div">
                <button className="reset-btn btn">Reset</button>
                <button type="submit" className="save-btn btn">
                  Save
                </button>
              </div>
            </div>
          </form>
        </modal>
      ) : null}

      {/* ------------------------------------------MODAL-VIEW------------------------------------------------ */}
    </div>
  );
}

export default PassManager;
