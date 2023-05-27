import { createReducer } from "@reduxjs/toolkit";
let initialState: any = { newTask: [], allTask: [] };

export const TaskReducer = createReducer(initialState, {
  setAllTask: (state, action) => {
    state.allTask = action.payload;
  },
  AddNewTask: (state, action) => {
    const taskTemp = {
      id: state.allTask.length + 1,
      title: action.payload.title,
      collection: action.payload.collection,
      desc: action.payload.desc,
    };
    state.allTask.push(taskTemp);
  },
  RemoveTask: (state, action) => {
    state.allTask = state.allTask.filter(
      (data: any) => data.id !== action.payload
    );
  },
});
