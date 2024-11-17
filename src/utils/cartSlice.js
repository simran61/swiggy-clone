import { createSlice } from "@reduxjs/toolkit";
import { logDOM } from "@testing-library/react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: {},
  },
  reducers: {
    addItem: (state, action) => {
      // state.items.push(action.payload.items);

      let index = state.items?.findIndex(
        (item) => item.id === action.payload.items.id
      );
      console.log(index);

      if (index === -1) {
        console.log(action.payload.items);
        state.items.push(action.payload.items);
      } else {
        console.log("Object already exists");
      }
    },
    updateQuantity: (state, action) => {
      state.quantity = action.payload.quantity;
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
