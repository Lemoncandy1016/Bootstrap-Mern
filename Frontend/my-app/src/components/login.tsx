import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUserinfo } from "../features/loginSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errormessage, seterrormessage] = useState("");
  const navigate = useNavigate();

  const loginUserinfo = async () => {
    const email = nameRef.current!.value.trim();
    const password = passwordRef.current!.value.trim();
    const userinfo = { email, password };

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/auth/login",
        userinfo
      );

      localStorage.setItem("authToken", data.token);

      console.log(data);
      dispatch(addUserinfo(userinfo));

      setTimeout(() => {
        navigate("/");
      }, 1800);
    } catch (error: any) {
      seterrormessage(error.message);
      // console.log(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h2>Login Form</h2>
      <div
        style={{
          backgroundColor: "green",
          margin: "auto",
          width: "20%",
        }}
      >
        <p style={{ color: "white" }}>{errormessage}</p>
      </div>
      <form
        style={{
          display: "inline-block",
          textAlign: "left",
          maxWidth: "300px",
        }}
        // onSubmit={loginUserinfo}
      >
        <label htmlFor="email">Email:</label>
        <input
          ref={nameRef}
          type="text"
          id="email"
          name="email"
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            width: "100%",
          }}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            width: "100%",
          }}
        />
        <br />
        <input
          type="button"
          value="Login"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={loginUserinfo}
        />
      </form>
    </div>
  );
};

export default Login;
