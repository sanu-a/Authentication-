import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function signupUser() {
    axios
      .post("http://localhost:8008/signup", {
        userName,
        password,
      })
      .then((res) => console.log(res));
  }

  return (
    <div className="App">
      <h1>Sign up </h1>
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
      <button onClick={signupUser}>Submit</button>
    </div>
  );
}
export default Signup;
