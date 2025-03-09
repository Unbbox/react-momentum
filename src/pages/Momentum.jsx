import { useState } from "react";
import Clock from "../components/Clock";
import Todo from "../components/Todo";
import Weather from "../components/Weather";
import Background from "../components/Background";

function Momentum({ nickname }) {
  return (
    <div>
      <Weather />
      <h1>Hello {nickname}!</h1>
      <Clock />
      <Todo />
      <Background />
    </div>
  );
}

export default Momentum;
