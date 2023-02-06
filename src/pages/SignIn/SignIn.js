import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import eyeOn from "../../images/eye(1).png";
import eyeoff from "../../images/eyeoff.png";
import { NavLink, Route, Routes } from "react-router-dom";
import "./SignIn.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCurrentUser, filterUsersData } from "../../redux/Slice";

const SignInSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  mpin: Yup.string()
    .min(4, "Too Short!")
    .max(4, "Too Long!")
    .required("Required"),
});
function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.passmanager);
  const [textSecure, setTextSecure] = useState(true);
  const formik = useFormik({
    initialValues: {
      mobile: "",
      mpin: "",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      const userMobile = users.allUsers.filter(
        (e) => e.mobile === values.mobile
      ).length;
      console.log(userMobile);
      if (userMobile == 0) {
        alert("User Not Registered");
      } else {
        dispatch(addCurrentUser({ mobile: values.mobile, mpin: values.mpin }));
        dispatch(filterUsersData());
      }
    },
  });
  // console.log("KK", users.allUsers);
  return (
    <div className="signin-container">
      <form onSubmit={formik.handleSubmit} className="form-container">
        <p className="business-text">SIGN IN TO YOUR ACCOUNT</p>
        <input
          autoComplete="off"
          maxLength={10}
          className="input"
          placeholder="Mobile Number"
          id="mobile"
          name="mobile"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.mobile}
        />

        {formik.errors.mobile && formik.touched.mobile ? (
          <p className="form-error1"> {formik.errors.mobile}</p>
        ) : null}

        <img
          src={textSecure ? eyeOn : eyeoff}
          onClick={() => {
            setTextSecure(!textSecure);
          }}
          className="eye"
        />
        <input
          autoComplete="off"
          maxLength={4}
          className="input"
          placeholder="MPin"
          id="mpin"
          name="mpin"
          type={textSecure ? "password" : "text"}
          onChange={formik.handleChange}
          value={formik.values.mpin}
        />

        {formik.errors.mpin && formik.touched.mobile ? (
          <p className="form-error2"> {formik.errors.mpin} </p>
        ) : null}

        <p className="forget-text">Forgot your password?</p>
        <button type="submit" className="submit-btn">
          SIGN IN
        </button>

        <p className="Account-text">
          Don't have a Account?{" "}
          <NavLink
            to="/signup"
            className="tablink"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "white",
                textDecoration: "none",
              };
            }}
          >
            SIGN UP
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
