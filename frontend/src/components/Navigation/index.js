// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navigation-container-wrapper">
      <div className="navigation-container-icon-label-wrapper">
        <div className="navigation-container-icon">
          <i class="fa-solid fa-ghost fa-2x"></i>
        </div>
        <div classNam="navigation-container-label">
          <h2>Mediums</h2>
        </div>
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
