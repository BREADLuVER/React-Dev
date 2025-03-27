import { useState } from "react";

export default function FeedbackForm2() {
  function handleClick() {
    const newName = prompt("What is your name?");
    alert(`Hello, ${newName}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
