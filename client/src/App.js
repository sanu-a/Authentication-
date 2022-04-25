import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AppContext from "./context/AppContext";

function App() {
  // const [showSignup, setShowSignup] = useState(false);
  return (
    <>
      <Login />
    </>
  );
}

export default App;
