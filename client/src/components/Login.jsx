import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    axios
      .post("http://localhost:8008/login", {
        userName,
        password,
      })
      .then((res) => console.log(res));
  }

  return (
    <div className="App">
      <h1>Login </h1>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginUser}>Submit</button>
    </div>
  );
}
export default Login;
