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
    incrementItemQuantity: (state, action) => {
      const { uid } = action.payload;
      const updatedItems = state.itemsInCart.map((item) =>
        item.uid === uid ? { ...item, quantity: item.quantity + 1 } : item
      );
      state.itemsInCart = updatedItems;
    },
    decrementItemQuantity: (state, action) => {
      const { uid } = action.payload;
      const updatedItems = state.itemsInCart.map((item) =>
        item.uid === uid && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      );
      state.itemsInCart = updatedItems;
    },
  },
});

export const {
  setItemInCart,
  deleteItemFromCart,
  deleteItemFrom,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
