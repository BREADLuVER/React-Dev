import React, { useState, useContext } from "react";
import { FitnessContext, FitnessProvider } from "./FitnessContext";
import Button from "../../components/Button";

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
    <div style={{ marginBottom: "20px", display: "grid" }}>
      <h2>Add Fitness Goal</h2>
      <input
        type="text"
        placeholder="Enter goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
  );
};

const FitnessGoalList = () => {
  const { state, dispatch } = useContext(FitnessContext);

  const handleAchieved = (id) => {
    dispatch({ type: "COMPLETE_GOAL", payload: id });
  };

  return (
    <div>
      <h2>Your Fitness Goals</h2>
      {state.goals.length === 0 && <p>No goals yet.</p>}
      <ul>
        {state.goals.map((item) => {
          return (
            <li key={item.id}>
              <strong>{item.goal}</strong> | {item.category} | {item.reps} reps
              <Button
                variant="primary"
                onClick={() => handleAchieved(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Achieved
              </Button>
            </li>
          );
        })}
      </ul>

      <h3 style={{ marginTop: "30px" }}>Recently Achieved Goals</h3>
      {state.completedGoals.length === 0 && <p>No completed goals yet.</p>}
      <ul>
        {state.completedGoals.map((item) => (
          <li key={item.id}>
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
      <FitnessGoalForm />
      <FitnessGoalList />
    </FitnessProvider>
  );
}
