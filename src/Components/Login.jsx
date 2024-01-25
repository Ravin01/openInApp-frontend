/* eslint-disable react/no-unescaped-entities */
import { Link, Navigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../Styles/Login.css";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    userEmail: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      let backendUrl;
      const newUser = await fetch(`${backendUrl}/login`, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = await newUser.json();

      setLoading(false);
      if (newUser.status === 401) {
        toast.error("Invalid Password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (newUser.status === 403) {
        toast.error("User not yet registered", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        sessionStorage.setItem("user", JSON.stringify(userData));
      }
      setInput({
        userEmail: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  if (
    sessionStorage.getItem("user") &&
    JSON.parse(sessionStorage.getItem("user"))
  ) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <div className="login-container">
      <h2 className="login-heading">Sign In</h2>
      <h6>Sign in to your account</h6>
      <div className="auth-buttons">
        <button className="auth-external-buttons" >sign in with google</button>
        <button className="auth-external-buttons" >sign in with apple</button>
      </div>
      <form action="" onSubmit={handleSubmit} className="form-container">
        <label htmlFor="userEmail">Email address</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="userEmail"
          id="userEmail"
          required
          onChange={handleChange}
          value={input.userEmail}
          className="login-input"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          id="password"
          required
          onChange={handleChange}
          value={input.password}
          className="login-input"
        />
<div>

          <Link
            to={"/forgotPassword"}
            className="login-form-link"
            >
            Forgot Password ?
          </Link>
              </div>

{loading ? 
<div className="login-loader-con">
    <div className="login-loader"></div>
</div>
    :

        <button type="submit" className="login-button">
          Sign In
        </button>
}


      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="form-link">
        <p>Don't have an Account ? </p>
        <Link to="/auth/register" className="form-link-register">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
