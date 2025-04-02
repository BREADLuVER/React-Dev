import React, {useReducer} from "react";
import { undoRedoReducer, initialState } from "./reducer";
import { ActionTypes } from "./types";

export const UndoRedoList = () => {
    const [state, dispatch] = useReducer(undoRedoReducer, initialState)
    const {items} = state.present

    const handleAdd = () => {
        const item = prompt("Enter Item: ")
        if (item) {
            dispatch({ type: ActionTypes.ADD_ITEM, payload: item })
        }
    }

    const handleRemove = () => {
        dispatch({ type: ActionTypes.REMOVE_LAST_ITEM })
    }

    const handleUndo = () => {
        dispatch({ type: ActionTypes.UNDO })
    }

    const handleRedo = () => {
        dispatch({ type: ActionTypes.REDO })
    }

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
            <button onClick={handleRemove} className="btn" disabled={items.length === 0}>
                Remove Last
            </button>
            <button onClick={handleUndo} className="btn" disabled={state.past.length === 0}>
                Undo
            </button>
            <button onClick={handleRedo} className="btn" disabled={state.future.length === 0}>
                Redo
            </button>
            </div>
        </div>
    );
}