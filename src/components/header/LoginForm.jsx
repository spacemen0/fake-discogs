import React, { useState } from "react";

const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("username");
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, username, email, password, option);
      }}
    >
      {option === "username" && (
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      )}
      <br />
      {option === "email" && (
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      )}
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <input
        type="checkbox"
        checked={option === "email"}
        onChange={() => setOption(option === "email" ? "username" : "email")}
      />
      <span>useEmail</span>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
