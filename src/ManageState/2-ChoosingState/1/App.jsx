import { useState } from "react";

export default function ClockProp({ time }) {
  const [color, setColor] = useState("black");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h1 style={{ color }}>{time}</h1>

      <label>
        Choose color:{" "}
        <select value={color} onChange={handleChange}>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>
      </label>
    </div>
  );
}
