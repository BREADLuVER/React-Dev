import { useState, useEffect } from "react";

export default function CounterList() {
  const [counters, setCounters] = useState(() => {
    const savedCounters = localStorage.getItem("counters");
    return savedCounters ? JSON.parse(savedCounters) : [0];
  });

  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counters));
  }, [counters]);

  function addCounter() {
    setCounters([...counters, 0]);
  }

  function increaseCounter(index) {
    setCounters(counters.map((count, i) => (i === index ? count + 1 : count)));
  }

  function resetCounter(index) {
    setCounters(counters.map((count, i) => (i === index ? 0 : count)));
  }

  function resetAll() {
    setCounters(counters.map(() => 0));
  }

  return (
    <div>
      <h2>Counters</h2>
      {counters.map((count, index) => (
        <div key={index}>
          <span>{count}</span>
          <button onClick={() => increaseCounter(index)}>+</button>
          <button onClick={() => resetCounter(index)}>Reset</button>
        </div>
      ))}
      <h3>Total Sum: {counters.reduce((sum, count) => sum + count, 0)}</h3>
      <button onClick={addCounter}>Add Counter</button>
      <button onClick={resetAll}>Reset All</button>
    </div>
  );
}
