import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import ProductSlice from "./ProductSlice";
const Store = configureStore({
  reducer: {
    cart: cartReducer,
    product:ProductSlice
  },
});

export default Store;
