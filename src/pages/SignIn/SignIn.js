import React, { useState } from "react";
import { useFormik } from "formik";
import eyeOn from "../../images/eye(1).png";
import eyeoff from "../../images/eyeoff.png";
import "./SignIn.css";

function SignIn() {
  const [textSecure, setTextSecure] = useState(false);
  const formik = useFormik({
    initialValues: {
      mobile: "",
      mpin: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="signin-container">
      <form onSubmit={formik.handleSubmit} className="form-container">
        <input
          className="input"
          placeholder="Mobile Number"
          id="mobile"
          name="mobile"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.mobile}
        />
        <img
          src={textSecure ? eyeOn : eyeoff}
          onClick={() => {
            setTextSecure(!textSecure);
          }}
          className="eye"
        />
        <input
          className="input"
          placeholder="MPin"
          id="mpin"
          name="mpin"
          type={textSecure ? "password" : "text"}
          onChange={formik.handleChange}
          value={formik.values.mpin}
        />
        <p>Forgot your password?</p>
        <button type="submit" className="submit-btn">
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default SignIn;
