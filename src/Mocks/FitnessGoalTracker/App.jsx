import React, { useState, useContext } from "react";
import { FitnessContext, FitnessProvider } from "./FitnessContext";
import Button from "../../components/Button";
import styles from "./FitnessTracker.module.css"

const FitnessGoalForm = () => {
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");
  const [reps, setReps] = useState("");
  const { dispatch } = useContext(FitnessContext);

  const handleAddGoal = () => {
    if (goal && category && reps) {
      dispatch({
        type: "ADD_GOAL",
        payload: {
          id: Date.now(),
          goal,
          category,
          reps,
        },
      });

      setGoal("");
      setCategory("");
      setReps("");
    }
  };

  return (
    <div className={styles.section}>
      <h2>Add Fitness Goal</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>
            Select category
          </option>
          <option value="Strength">Strength</option>
          <option value="Leg">Leg</option>
          <option value="Calorie">Calorie</option>
        </select>
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <Button variant="primary" onClick={handleAddGoal}>
          Add Goal
        </Button>
      </div>
    </div>
  );
};

const FitnessGoalList = () => {
  const { state, dispatch } = useContext(FitnessContext);

  const handleAchieved = (id) => {
    dispatch({ type: "COMPLETE_GOAL", payload: id });
  };

  return (
    <div className={styles.section}>
      <h2>Your Fitness Goals</h2>
      {state.goals.length === 0 && <p>No goals yet.</p>}
      <ul className={styles.goalList}>
        {state.goals.map((item) => (
          <li key={item.id} className={styles.goalItem}>
            <span>
              <strong>{item.goal}</strong> | {item.category} | {item.reps} reps
            </span>
            <Button variant="secondary" onClick={() => handleAchieved(item.id)}>
              Achieved
            </Button>
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "30px" }}>Recently Achieved Goals</h3>
      {state.completedGoals.length === 0 && <p>No completed goals yet.</p>}
      <ul className={styles.completedList}>
        {state.completedGoals.map((item) => (
          <li key={item.id} className={styles.goalItem}>
            ✅ <strong>{item.goal}</strong> | {item.category} | {item.reps} reps
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function GoalTracker() {
  return (
    <FitnessProvider>
      <div className={styles.container}>
        <FitnessGoalForm />
        <FitnessGoalList />
      </div>
    </FitnessProvider>
  );
}
