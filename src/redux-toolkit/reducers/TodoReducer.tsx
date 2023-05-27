import { createReducer } from "@reduxjs/toolkit";
let initialState: any = { allTodos: [] };

export const TodoReducer = createReducer(initialState, {
  setAllTodo: (state, action) => {
    state.allTodos = action.payload;
  },
  removeItems: (state, action) => {
    state.allTodos = state.allTodos.filter(
      (data: any) => data.id !== action.payload
    );
  },
  selectItem: (state, action) => {
    const temp = state.allTodos.reduce((todoAcc: any, item: any) => {
      if (item.id === action.payload.id) {
        if (action.payload.status === "pending") {
          todoAcc.push({
            ...item,
            status: action.payload.status,
            badgeclass: action.payload.badgeClass,
            badge: "Pending",
          });
        } else if (action.payload.status === "completed") {
          todoAcc.push({
            ...item,
            status: action.payload.status,
            badgeclass: action.payload.badgeClass,
            badge: "Done",
          });
        }
      } else todoAcc.push(item);
      return todoAcc;
    }, []);
    state.allTodos = temp;
  },
  addNewTodo: (state, action) => {
    const temp = {
      id: state.allTodos.length + 1,
      title: action.payload,
      status: "pending",
      badge: "Pending",
      badgeclass: "badge-light-danger",
    };
    state.allTodos = [temp, ...state.allTodos];
  },

});
