// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const currentUser = useSelector((state) => state.session.user);
  // console.log(`Current User:`, currentUser);

  const userArr = Object.values(currentUser);
  // console.log(`User Array`, userArr);

  const userId = userArr[0];
  // console.log(`USER ID:`, userId);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="my-stories-btn">
        <Link to={`/stories/author/${userId}`}>My Stories</Link>
      </button>
      <button className="profile-btn" onClick={openMenu}>
        <i className="fas fa-user-circle fa-xl" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="profile-dropdown-label">Username:</li>
          <li>{user.username}</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="profile-dropdown-label">Email:</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
