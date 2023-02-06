import "./SignUp.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import eyeOn from "../../images/eye(1).png";
import eyeoff from "../../images/eyeoff.png";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUsers } from "../../redux/Slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUpSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  mpin: Yup.string()
    .min(4, "Too Short!")
    .max(4, "Too Long!")
    .required("Required"),
  mpinconfirm: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("mpin"), null], "MPin must match"),
});

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.passmanager);
  const [textSecure, setTextSecure] = useState(true);
  const formik = useFormik({
    initialValues: {
      mobile: "",
      mpin: "",
      mpinconfirm: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log(values);
      const userMobile = users.allUsers.filter(
        (e) => e.mobile === values.mobile
      ).length;
      if (userMobile > 0) {
        // alert("User Already Exist");
        toast.warn("User Already Exist", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      } else {
        dispatch(addUsers({ mobile: values.mobile, mpin: values.mpin }));

        toast.success("Registration Successful", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    },
  });

  return (
    <div className="signin-container">
      <ToastContainer />
      <form onSubmit={formik.handleSubmit} className="form-container">
        <p className="business-text">SIGN UP</p>
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
          className="eye-1"
        />
        <input
          autoComplete="off"
          maxLength={4}
          className="input"
          placeholder="Enter 4 digit MPin"
          id="mpin"
          name="mpin"
          type={textSecure ? "password" : "text"}
          onChange={formik.handleChange}
          value={formik.values.mpin}
        />
        <input
          autoComplete="off"
          maxLength={4}
          className="input"
          placeholder="Re-Enter 4 digit MPin"
          id="mpinconfirm"
          name="mpinconfirm"
          type={textSecure ? "password" : "text"}
          onChange={formik.handleChange}
          value={formik.values.mpinconfirm}
        />
        {formik.errors.mpin && formik.touched.mpin ? (
          <p className="form-error2"> {formik.errors.mpin}</p>
        ) : null}
        {formik.errors.mpinconfirm && formik.touched.mpinconfirm ? (
          <p className="form-error3"> {formik.errors.mpinconfirm}</p>
        ) : null}

        <button type="submit" className="submit-btn1">
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default SignUp;
