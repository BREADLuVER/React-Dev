import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import Button from "../../components/Button"; // adjust path as needed

const moods = ["😊 Happy", "😴 Tired", "😟 Anxious", "💪 Focused", "😐 Meh"];

function MoodTracker() {
  const [currentMood, setCurrentMood] = useState("");
  const [moodLog, setMoodLog] = useState([]);
  const [isLogging, setIsLogging] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  const handleAddMood = function () {
    if (!currentMood) return;

    setIsLogging(true);

    setTimeout(function () {
      setMoodLog(function (prev) {
        const updated = [...prev, { id: Date.now(), mood: currentMood }];
        if (updated.length > 5) {
          updated.shift();
        }
        return updated;
      });

      setCurrentMood("");
      setIsLogging(false);
    }, 500); // simulate slight delay for spinner demo
  };

  return (
    <div
      style={{
        padding: "1rem",
        maxWidth: "300px",
        backgroundColor: darkMode ? "#111" : "#fff",
        color: darkMode ? "#eee" : "#222",
        borderRadius: "8px",
      }}
    >
      <h2>Mood Tracker</h2>

      <Button variant="secondary" onClick={toggleTheme}>
        Switch Mode
      </Button>

      <select
        style={{ margin: "0.5rem 0", width: "100%" }}
        value={currentMood}
        onChange={function (e) {
          setCurrentMood(e.target.value);
        }}
      >
        <option value="">-- Select Mood --</option>
        {moods.map(function (mood) {
          return (
            <option key={mood} value={mood}>
              {mood}
            </option>
          );
        })}
      </select>

      <Button
        variant="primary"
        onClick={handleAddMood}
        isLoading={isLogging}
        disabled={currentMood === ""}
      >
        Log Mood
      </Button>

      <ul style={{ marginTop: "1rem" }}>
        {moodLog.map(function (entry) {
          return <li key={entry.id}>{entry.mood}</li>;
        })}
      </ul>
    </div>
  );
}

export default MoodTracker;
