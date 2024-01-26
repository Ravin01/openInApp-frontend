import { Link, Route, Routes } from "react-router-dom";
import Register from "../Components/Register";
import Login from "../Components/Login";

import "../Styles/Auth.css";

const Auth = () => {
  return (
    <div className="auth-con">
      <div className="auth-base">
      <i className="fa-solid fa-circle auth-base-icon "></i>
        <h4>Base</h4>
        <div className="auth-media">
          <Link to="/auth/login" target="_blank" className="auth-media-icon">
            <i className="fa-brands fa-github"  ></i>
          </Link>
          <Link to="/auth/login" target="_blank" className="auth-media-icon">
            <i className="fa-brands fa-square-twitter"></i>
          </Link>
          <Link to="/auth/login" target="_blank" className="auth-media-icon">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link to="/auth/login" target="_blank" className="auth-media-icon">
            <i className="fa-brands fa-discord"></i>
          </Link>
        </div>
      </div>
      <div className="auth-main">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
