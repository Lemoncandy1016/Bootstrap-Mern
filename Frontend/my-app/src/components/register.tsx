import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUserinfo } from "../features/loginSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [errormessage, seterrormessage] = useState("");

  const navigate = useNavigate();

  const registerUserinfo = async () => {
    const email = nameRef.current!.value.trim();
    const password = passwordRef.current!.value.trim();
    const username = usernameRef.current!.value.trim();

    const userinfo = { username, email, password };

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/auth/register",
        userinfo
      );

      // localStorage.setItem("authToken", data.token);

      dispatch(addUserinfo(userinfo));

      setTimeout(() => {
        navigate("/");
      }, 1800);
    } catch (error: any) {
      seterrormessage(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h2>Register Form</h2>
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
        //  onSubmit={registerUserinfo}
      >
        <label htmlFor="password">Username</label>
        <input
          ref={usernameRef}
          type="text"
          id="username"
          name="username"
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
          value="Register"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={registerUserinfo}
        />
      </form>
    </div>
  );
};

export default Register;
