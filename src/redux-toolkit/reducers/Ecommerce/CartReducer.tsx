import { createReducer } from "@reduxjs/toolkit";
import { cartType } from "../../../Components/apps/ecommerce/ReducerTypes";

let InitialState: any = {
  cart: [],
};
export const CartReducer = createReducer(InitialState, {
  incrementQty: (state, action) => {
    const productId = action.payload.item.id;
    state.cart = state.cart.map((item: cartType) =>
      productId === item.id
        ? { ...item, qty: item.qty + 1, sum: item.price * (item.qty + 1) }
        : item
    );
  },
  addToCart: (state, action) => {
    const productId = action.payload.item.id;
    if (
      state.cart.findIndex((product: cartType) => product.id === productId) !== -1
    ) {
      state.cart = state.cart.reduce((cartAcc: cartType[], product: cartType) => {
        if (product.id === productId) {
          cartAcc.push({
            ...product,
            qty: product.qty + action.payload.quantity,
            sum: product.price * (product.qty + action.payload.quantity),
          });
        } else {
          cartAcc.push(product);
        }
        return cartAcc;
      }, []);
    } else {
      state.cart = [
        ...state.cart,
        {
          ...action.payload.item,
          qty: action.payload.quantity,
          sum: action.payload.item.price * action.payload.item.qty,
        },
      ];
    }
  },
  decrementQty: (state, action) => {
    state.cart = state.cart.map((item: cartType) =>
      action.payload === item.id && item.qty > 1
        ? { ...item, qty: item.qty - 1, sum: item.price * (item.qty - 1) }
        : item
    );
  },
  removeFromCart: (state, action) => {
    state.cart = state.cart.filter((item: cartType) => item.id !== action.payload);
  },
});
