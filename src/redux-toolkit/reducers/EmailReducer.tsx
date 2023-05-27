import { createReducer } from "@reduxjs/toolkit";
let initialState: any = { allEmails: [], types: [], };

export const EmailReducer = createReducer(initialState, {
    setAllEmails: (state, action) => {
        state.allEmails = action.payload;
      },
});
