import React, { useState } from "react";
import { login, signup } from "../../firebase";
import "./Login.css";

const Login = () => {
  const [loginState, setLoginState] = useState("Register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userAuth = async (event) => {
    event.preventDefault();
    if (loginState === "login") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };
  return (
    <div className="login-page">
      {loginState === "Register" ? <h1>Register Page</h1> : <h1>Login Page</h1>}

      <form className="login-form" onSubmit={userAuth}>
        {loginState === "Register" ? (
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <></>
        )}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value={loginState === "Register" ? "Register" : "Login"}
        />
      </form>
      {loginState === "Register" ? (
        <p>
          Already a user{" "}
          <span onClick={() => setLoginState("Login")}>Log In</span>
        </p>
      ) : (
        <p>
          New User{" "}
          <span onClick={() => setLoginState("Register")}>Register</span>
        </p>
      )}
    </div>
  );
};

export default Login;
