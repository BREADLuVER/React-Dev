import React from "react";
import { useDispatch, useSelector } from "./context";

export const UndoRedoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.present.items);
  const canUndo = useSelector((state) => state.past.length > 0);
  const canRedo = useSelector((state) => state.future.length > 0);

  const handleAdd = () => {
    const item = prompt("Enter item:");
    if (item) {
      dispatch({ type: "ADD_ITEM", payload: item });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Undo/Redo Item List</h2>
      <ul className="list-disc pl-6 mb-4">
        {items.map((item, index) => (
          <li key={index} className="text-gray-800">
            {item}
          </li>
        ))}
      </ul>
      <div className="space-x-2">
        <button onClick={handleAdd} className="btn">
          Add Item
        </button>
        <button
          onClick={() => dispatch({ type: "REMOVE_LAST_ITEM" })}
          disabled={items.length === 0}
          className="btn"
        >
          Remove Last
        </button>
        <button
          onClick={() => dispatch({ type: "UNDO" })}
          disabled={!canUndo}
          className="btn"
        >
          Undo
        </button>
        <button
          onClick={() => dispatch({ type: "REDO" })}
          disabled={!canRedo}
          className="btn"
        >
          Redo
        </button>
      </div>
    </div>
  );
};
