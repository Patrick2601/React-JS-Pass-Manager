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
import { useDispatch, useSelector } from "react-redux";
import {
  addCurrentUser,
  addUsersData,
  filterOnSearch,
  filterUsersData,
} from "../../redux/Slice";

const addSiteSchema = Yup.object().shape({
  url: Yup.string().required("Required"),
  sitename: Yup.string().required("Required"),
  sector: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  notes: Yup.string().required("Required"),
});
function PassManager() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.passmanager);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [edit, setEdit] = useState(false);
  const ref = useRef();
  const formik = useFormik({
    initialValues: {
      url: "",
      sitename: "",
      sector: "",
      username: "",
      password: "",
      notes: "",
    },
    validationSchema: addSiteSchema,
    onSubmit: (values) => {
      console.log(values);
      values.mobile = user.currentUser.mobile;
      dispatch(addUsersData(values));
      formik.resetForm();
    },
    onSubmit2: (values) => {
      console.log(values);
      values.mobile = user.currentUser.mobile;
      dispatch(addUsersData(values));
      formik.resetForm();
    },
  });
  // console.log("KK", user.currentUser);
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
          <img
            onClick={() => {
              console.log("sfjsa");
              dispatch(addCurrentUser({}));
            }}
            className="header-img3"
            src={profileImg}
          />
        </div>
      </div>
      <div className="sub-header">
        <p className="sites-text">Sites</p>
        <div className="sites-border"></div>
        <div className="sub-header-1">
          Social Media
          <div className="circle">{user.allUsersDataCopy.length}</div>
          {/* <img className="path-img" src={pathIcon} /> */}
          <select
            autoComplete="off"
            name="sector"
            onChange={formik.handleChange}
            value={formik.values.sector}
            className="addsite-input"
          >
            <option value="Select" selected>
              All
            </option>
            <option value="Social Media" selected>
              Social Media
            </option>
            <option value="Websites">Websites</option>
          </select>
        </div>
      </div>
      <div className="card-container">
        {user.allUsersDataCopy.length > 0 ? (
          user.allUsersDataCopy.map((e) => {
            return (
              <div
                onClick={() => {
                  setModal2(true);
                }}
                className="card"
              >
                <div className="card-innerDiv1">
                  <img src={fb} />
                  <div>
                    <p>{e.sitename}</p>
                    <img src={copyIcon} />
                    <span>Copy Password</span>
                  </div>
                </div>
                <p className="website-text">{e.url}</p>
              </div>
            );
          })
        ) : (
          <h1>Please Click on the "+" symbol to add sites</h1>
        )}
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
          <img
            onClick={() => {
              console.log("sfjsa");
              dispatch(addCurrentUser({}));
            }}
            src={profileWeb}
          />
        </div>

        <div className="search-bar">
          <input
            autoComplete="off"
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={async (e) => {
              dispatch(filterOnSearch(e.target.value));
            }}
          />
          <img src={searchWebIcon} />
        </div>
      </div>
      {/* ------------------------------------------WEB-VIEW------------------------------------------------ */}
      {/* ------------------------------------------MODAL-VIEW------------------------------------------------ */}
      {modal ? (
        <div className="addSite-modal">
          <form onSubmit={formik.handleSubmit}>
            <div className="modal-container">
              <img
                onClick={() => {
                  setModal(!modal);
                  formik.resetForm();
                  console.log("djc");
                }}
                className="cancel-Btn"
                src={addbtn}
              ></img>
              <p className="addSite-text">Add Site</p>
              <label className="label">URL</label>
              <input
                ref={ref}
                autoComplete="off"
                name="url"
                onChange={formik.handleChange}
                value={formik.values.url}
                className="addsite-input"
              />

              <label className="label">Site Name</label>
              <input
                ref={ref}
                autoComplete="off"
                name="sitename"
                onChange={formik.handleChange}
                value={formik.values.sitename}
                className="addsite-input"
              />

              <label className="label">Sector/Folder</label>
              <select
                autoComplete="off"
                name="sector"
                onChange={formik.handleChange}
                value={formik.values.sector}
                className="addsite-input"
              >
                <option value="Select" selected>
                  Select
                </option>
                <option value="Social Media" selected>
                  Social Media
                </option>
                <option value="Websites">Websites</option>
              </select>

              <label className="label">User Name</label>
              <input
                ref={ref}
                autoComplete="off"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                className="addsite-input"
              />

              <label className="label">Site Password</label>
              <input
                ref={ref}
                autoComplete="off"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="addsite-input"
              />

              <label className="label">Notes</label>
              <textarea
                ref={ref}
                autoComplete="off"
                name="notes"
                onChange={formik.handleChange}
                value={formik.values.notes}
                className="addsite-input"
              />
              {/* {formik.errors.username.length ||
              formik.errors.url.length ||
              formik.errors.sector.length ||
              formik.errors.sitename.length ||
              formik.errors.password.length < 0 ? (
                <p className="addsiteForm-error">Please fill all the details</p>
              ) : null} */}
              <div className="btns-div">
                <button
                  onClick={() => {
                    formik.resetForm();
                  }}
                  type="reset"
                  className="reset-btn btn"
                >
                  Reset
                </button>
                <button type="submit" className="save-btn btn">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}

      {/* ------------------------------------------MODAL-VIEW------------------------------------------------ */}
      {/* ------------------------------------------MODAL-VIEW------------------------------------------------ */}
      {modal2 ? (
        <div className="addSite-modal">
          <form onSubmit2={formik.handleSubmit}>
            <div className="modal-container">
              <img
                onClick={() => {
                  setModal2(false);
                  setEdit(false);
                  formik.resetForm();
               
                }}
                className="cancel-Btn"
                src={addbtn}
              ></img>
              <p className="addSite-text">Site Details</p>
              {!edit ? (
                <button
                  onClick={() => {
                    setEdit(true);
                  }}
                  className="edit-btn btn"
                >
                  Edit
                </button>
              ) : null}

              <label className="label">URL</label>
              <input
                ref={ref}
                autoComplete="off"
                name="url"
                onChange={formik.handleChange}
                value={formik.values.url}
                className="addsite-input"
                disabled={true}
               
          
              />

              <label className="label">Site Name</label>
              <input
                ref={ref}
                autoComplete="off"
                name="sitename"
                onChange={formik.handleChange}
                value={formik.values.sitename}
                className="addsite-input"
              />

              <label className="label">Sector/Folder</label>
              <select
                autoComplete="off"
                name="sector"
                onChange={formik.handleChange}
                value={formik.values.sector}
                className="addsite-input"
              >
                <option value="Select" selected>
                  Select
                </option>
                <option value="Social Media" selected>
                  Social Media
                </option>
                <option value="Websites">Websites</option>
              </select>

              <label className="label">User Name</label>
              <input
                ref={ref}
                autoComplete="off"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                className="addsite-input"
              />

              <label className="label">Site Password</label>
              <input
                ref={ref}
                autoComplete="off"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="addsite-input"
              />

              <label className="label">Notes</label>
              <textarea
                ref={ref}
                autoComplete="off"
                name="notes"
                onChange={formik.handleChange}
                value={formik.values.notes}
                className="addsite-input"
              />
              {/* {formik.errors.username.length ||
              formik.errors.url.length ||
              formik.errors.sector.length ||
              formik.errors.sitename.length ||
              formik.errors.password.length < 0 ? (
                <p className="addsiteForm-error">Please fill all the details</p>
              ) : null} */}
              <div className="btns-div">
                {edit ? (
                  <button type="submit" className="save-btn btn">
                    Update
                  </button>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      ) : null}

      {/* ------------------------------------------MODAL-VIEW------------------------------------------------ */}
    </div>
  );
}

export default PassManager;
