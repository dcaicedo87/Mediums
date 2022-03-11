// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "../LoginFormPage/LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleSubmitDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="login-form-username-label">Username or Email</label>
      <input
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      <label className="login-form-password-label">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="login-form-btn" type="submit">
        Log In
      </button>
      <button className="demo-form-btn" onClick={handleSubmitDemo}>
        DEMO USER
      </button>
    </form>
  );
}

export default LoginForm;
