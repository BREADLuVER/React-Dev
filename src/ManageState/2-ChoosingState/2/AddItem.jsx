import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") return;
    onAddItem(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
