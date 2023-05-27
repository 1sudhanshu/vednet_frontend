import { createReducer } from "@reduxjs/toolkit";
let initialState = { notes: [] };

export const StickyReducer = createReducer(initialState, {
  setNotes: (state, action) => {
    state.notes = action.payload;
  },
});
