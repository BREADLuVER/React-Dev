import { useState } from "react";

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name: {""}
        {isEditing ? (
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <br />
      <label>
        Last name: {""}
        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <br />
      <button type="submit">
        {isEditing ? "save profile" : "edit profile"}
      </button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
