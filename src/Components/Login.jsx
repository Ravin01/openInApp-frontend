/* eslint-disable react/no-unescaped-entities */
import { Link, Navigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../Styles/Login.css";
import { useState } from "react";
import { users } from "../Utils/auth";

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
      let checkUser = users.find((user) => {
        return (
          user.userEmail === input.userEmail && user.password === input.password
        );
      });
      
      if (checkUser) {
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("user", JSON.stringify(checkUser));
          setInput({
            userEmail: "",
            password: "",
          });
        }, 2000);
      } else {
        setTimeout(() => {
          setLoading(false);
          toast.error("Invalid username or Password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickGoogle = () => {
    try {
      console.log(input);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickApple = () => {
    try {
      console.log(input);
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
        <button className="auth-external-buttons" onClick={handleClickGoogle}>
          <img
            src="https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png"
            alt=""
            className="auth-external-btn-img"
          />
          <p>sign in with google</p>
        </button>
        <button className="auth-external-buttons" onClick={handleClickApple}>
          <img
            src="https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png"
            alt=""
            className="auth-external-btn-img"
          />
          <p>sign in with apple</p>
        </button>
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
          <Link to={"/forgotPassword"} className="login-form-link">
            Forgot Password ?
          </Link>
        </div>

        {loading ? (
          <div className="login-loader-con">
            <div className="login-loader"></div>
          </div>
        ) : (
          <button type="submit" className="login-button">
            Sign In
          </button>
        )}
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
