import { createReducer } from "@reduxjs/toolkit";

let InitialState: any = {
  productItem: [],
  symbol: "$",
  singleItem: [],
  isVertical: false,
};

export const ProductReducer = createReducer(InitialState, {
  setProductItem: (state, action) => {
    state.productItem = action.payload;
  },
});
