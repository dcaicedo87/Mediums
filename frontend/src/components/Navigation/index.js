// frontend/src/components/Navigation/index.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navigation-container-wrapper">
      <div className="navigation-container-icon-label-wrapper">
        <NavLink exact to="/" style={{ textDecoration: "none" }}>
          <div className="navigation-container-icon">
            <i className="fa-solid fa-ghost fa-2x"> Mediums </i>
          </div>
        </NavLink>
      </div>
      <div className="navigation-container-login-wrapper">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
