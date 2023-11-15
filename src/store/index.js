import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import cartReducer from "./card/reducer";

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware,
});
