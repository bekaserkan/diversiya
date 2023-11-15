import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "card",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.itemsInCart.push(newItem);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (game) => game.uid !== action.payload
      );
    },
    deleteItemFrom: (state, action) => {
      state.itemsInCart = action.payload;
    },
  },
});

export const {
  setItemInCart,
  deleteItemFromCart,
  deleteItemFrom,
} = cartSlice.actions;

export default cartSlice.reducer;
