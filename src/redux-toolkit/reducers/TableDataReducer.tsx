import { createReducer } from "@reduxjs/toolkit";
let initialState = { tableData: [] };

export const TableDataReducer = createReducer(initialState, {
  setTableData: (state, action) => {
    state.tableData = action.payload;
  },
});
