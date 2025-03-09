import { useEffect, useState } from "react";

function Clock() {
  const date = new Date();
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  useEffect(() => {
    setHour(String(date.getHours()).padStart(2, "0"));
    setMinute(String(date.getMinutes()).padStart(2, "0"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(String(date.getHours()).padStart(2, "0"));
      setMinute(String(date.getMinutes()).padStart(2, "0"));
      setSecond(String(date.getSeconds()).padStart(2, "0"));
    }, 1000);
    return () => clearInterval(interval);
  }, [second]);

  return (
    <div className="clock-container">
      <h1>
        {hour}:{minute}
      </h1>
    </div>
  );
}

export default Clock;
