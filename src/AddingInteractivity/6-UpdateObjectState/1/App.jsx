import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      score: prevPlayer.score + 1,
    }));
  }

  function handleFirstNameChange(e) {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      firstName: e.target.value,
    }));
  }

  function handleLastNameChange(e) {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      lastName: e.target.value,
    }));
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
