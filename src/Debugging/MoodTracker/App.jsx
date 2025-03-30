import React, { useState } from "react";

const moods = ["😊 Happy", "😴 Tired", "😟 Anxious", "💪 Focused", "😐 Meh"];

function MoodTracker() {
  const [currentMood, setCurrentMood] = useState("");
  const [moodLog, setMoodLog] = useState([]);

  const handleAddMood = () => {
    if (!currentMood) return;

    setMoodLog((prev) => {
      const updated = [...prev, { mood: currentMood }];
      // Trim the log to 5 entries
      if (updated.length > 5) {
        updated.shift(); // remove oldest
      }
      return updated;
    });

    setCurrentMood(""); // Reset selection
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "300px" }}>
      <h2>Mood Tracker</h2>
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
        {moodLog.map((entry, index) => (
          <li key={entry.mood}>{entry.mood}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoodTracker;
