import { addedBug, removedBug, resolvedBug } from "./actions";

const initalState = [];
let lastId = 0;
export function reducer(state = initalState, action) {
  switch (action.type) {
    case addedBug:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case removedBug:
      return state.filter((bug) => bug.id !== action.payload.id);

    case resolvedBug:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );

    default:
      return state;
  }
}
