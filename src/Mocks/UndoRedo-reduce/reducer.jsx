import { ActionTypes } from "./types";

const initialPresent = {items:[]}

export const initialState = {
    past:[],
    present:initialPresent,
    future:[],
}

export const undoRedoReducer = (state, action) => {
    const { past, present, future } = state;

    switch (action.type) {
        case ActionTypes.ADD_ITEM: {
            const newPresent = {
                ...present,
                items: [...present.items, action.payload],
            }
            return {
                past: [...past, present],
                present: newPresent,
                future: [],
            }
        }

        case ActionTypes.REMOVE_LAST_ITEM: {
            if (present.items.length === 0) return state;
            const newPresent = {
                ...present,
                items: present.items.slice(0,-1)
            }
            console.log('Type of past:', typeof past);
            console.log('Is past an array:', Array.isArray(past));
            return {
                past: [...past, present],
                present: newPresent,
                future: [],
            }
        }

        case ActionTypes.UNDO: {
            if (past.length === 0) return state;
            const previous = past[past.length - 1]
            const newPast = past.slice(0,-1)

            return {
                past: newPast,
                present: previous,
                future: [present, ...future],
            }
        }

        case ActionTypes.REDO: {
            if (future.length === 0) return state;
            const next = future[0];
            const newFuture = future.slice(1);

            return {
                past: [...past, present],
                present: next,
                future: newFuture,
            }
        }

        default:
            return state;
    }
}