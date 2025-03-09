import { useState } from "react";
import "./App.css";
import Momentum from "./pages/Momentum";

const USERNAME_KEY = "username";

function App() {
  const handleLogin = () => {
    console.log("Logging in...");
    const nickname = document.querySelector("#nickname").value;
    localStorage.setItem(USERNAME_KEY, nickname);
  };
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  return (
    <div className="container">
      {savedUsername !== null ? (
        <div>
          <Momentum nickname={savedUsername} />
        </div>
      ) : (
        <div>
          <h1>Welcome to Momentum</h1>
          <h3>Insert your nickname</h3>
          <form action="" id="login-form">
            <input type="text" name="nickname" id="nickname" />
            <button onClick={handleLogin}>Log In</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
