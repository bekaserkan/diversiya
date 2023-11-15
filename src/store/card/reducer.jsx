const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "card",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      const existingItem = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.itemsInCart.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );
    },
    deleteItemFrom: (state, action) => {
      state.itemsInCart = action.payload;
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.itemsInCart.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.itemsInCart.find(
        (item) => item.id === action.payload
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const {
  setItemInCart,
  deleteItemFromCart,
  deleteItemFrom,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
