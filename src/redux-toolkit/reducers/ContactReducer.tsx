import { createReducer } from "@reduxjs/toolkit";
let initialState: any = { users: [], data: [],tempId:0,editdata:{} };

export const ContactReducer = createReducer(initialState, {
    setUsers: (state, action) => {
    state.users = action.payload;
  },
  setEditData:(state, action)=> {state.users=state.users.map((item:any) =>(item.id === state.tempId ?action.payload :item ))} ,
  setTempId:(state, action)=>{
    state.tempId = action.payload;
  },
  createUser: (state, action) => {
    const userTemp = {
      id: state.users.length + 1,
      avatar: action.payload.defaultuser,
      name: action.payload.data?.name,
      surname: action.payload.data.surname,
      email: action.payload.data.email,
      age: action.payload.data?.age,
      mobile: action.payload.data.mobile,
    };
    state.users = [...state.users, userTemp];
  },
  editUser: (state, action) => {
    const userTemp = {
      id: state.users.length + 1,
      avatar: action.payload.imgUrl,
      name: action.payload.data.name,
      surname: action.payload.data.surname,
      email: action.payload.data.email,
      age: action.payload.data.age,
      mobile: action.payload.data.mobile,
    };
    state.data = [...state.data, userTemp];
  },
  deletedUser: (state, action) => {    
    state.users = state.users.filter(
      (data: any) => data.id !== action.payload
    );
  },
});
