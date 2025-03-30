import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

const moods = ["😊 Happy", "😴 Tired", "😟 Anxious", "💪 Focused", "😐 Meh"];

function MoodTracker() {
  const [currentMood, setCurrentMood] = useState("");
  const [moodLog, setMoodLog] = useState([]);

  const { darkMode, toggleTheme } = useTheme();
  console.log("useTheme()", useTheme());
  const handleAddMood = () => {
    if (!currentMood) return;

    setMoodLog((prev) => {
      const updated = [...prev, { id : Date.now(), mood: currentMood }];
      // Trim the log to 5 entries
      if (updated.length > 5) {
        updated.shift(); // remove oldest
      }
      return updated;
    });

    setCurrentMood(""); // Reset selection
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "300px",
        backgroundColor: darkMode ? "#111" : "#fff",
        color: darkMode ? "#eee" : "#222",
        borderRadius: "8px",
     }}>
      <h2>Mood Tracker</h2>
      <button onClick={toggleTheme}>Switch mod</button>
      <select value={currentMood} onChange={(e) => setCurrentMood(e.target.value)}>
        <option value="">-- Select Mood --</option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood}
          </option>
        ))}
      </select>
      <button onClick={handleAddMood}>Log Mood</button>

      <ul>
        {moodLog.map((entry) => (
          <li key={entry.id}>{entry.mood}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoodTracker;
