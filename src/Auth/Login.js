import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "./authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import styles from "./auth.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, currentUser } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      history.push("/panel");
    }
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);

    if (isFormValid()) {
      dispatch(loginUser({ email, password }))
        .then(unwrapResult)
        .then((loggedInUser) => {
          console.log(loggedInUser);
        })
        .catch((error) => {
          setErrors((prevErrors) => [...prevErrors, error]);
        });
    }
  };

  const isFormValid = () => Boolean(email) && Boolean(password);

  const displayErrors = () =>
    errors.map((error, key) => <p key={key}> {error.message}</p>);

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="user-icon">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
            alt=""
          />
        </div>
        <form action="">
          {errors.length > 0 && <p error>{displayErrors()}</p>}
          <input
            placeholder="Email Adresi"
            onChange={(e) => setEmail(e.target.value)}
            icon="mail"
            iconPosition="left"
            name="email"
            type="email"
          />

          <input
            placeholder="Parola"
            onChange={(e) => setPassword(e.target.value)}
            icon="lock"
            iconPosition="left"
            name="password"
            type="password"
          />

          <button
            color="green"
            fluid
            size="large"
            onClick={handleSubmit}
            loading={loading === "pending"}
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
