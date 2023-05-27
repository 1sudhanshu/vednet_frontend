import { createReducer } from "@reduxjs/toolkit";

let InitialState = {
  IsFilter: false,
  listView: false,
  colClassName: 3,
  sideBarOn: false,
  filter: {
    brand: ["Diesel", "Hudson", "Lee", "Spykar"],
    color: "",
    value: { min: 100, max: 950 },
    sortBy: "",
    searchBy: "",
    category: [
       "Men's Jacket",
       "Fancy Men's T-shirt",
       "Fancy Women's Top",
       "Fancy Women's T-shirt",
       "Women's T-shirt",
       "Fancy T-shirt",
       "Men's T-shirt",
      "Fancy Men's T-shirt",
    ],
  },
};
export const FilterReducer = createReducer(InitialState, {
  filterGender: (state, action) => {
    state.filter.category.push(action.payload);
  },
  removeGender: (state, action) => {
    state.filter.category=state.filter.category.filter(category =>  category !==action.payload )
  },
  addNewBrand: (state, action) => {
    state.filter.brand.push(action.payload);
  },
  removeBrand: (state, action) => {
    state.filter.brand.splice(action.payload.index, 1);
    state.filter = { ...state.filter, brand: action.payload.category };
  },
  setIsFilter: (state) => {
    state.IsFilter = !state.IsFilter;
  },
  setSideBarOn: (state) => {
    state.sideBarOn = !state.sideBarOn;
  },
  setListView: (state, action) => {
    state.listView = action.payload;
  },
  setColClassName: (state, action) => {
    state.colClassName = action.payload;
  },
  filterSearchBy: (state, action) => {
    state.filter = { ...state.filter, searchBy: action.payload };
  },
  filterColor: (state, action) => {
    state.filter = { ...state.filter, color: action.payload };
  },
  filterBrand: (state, action) => {
    state.filter = { ...state.filter, brand: action.payload };
  },
  filterPrice: (state, action) => {
    state.filter = {
      ...state.filter,
      value: { min: action.payload[0], max: action.payload[1] },
    };
  },
});
