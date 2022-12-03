import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

type CartState = {
  cart: Product[];
  open: boolean;
};

const initialState: CartState = {
  cart: [],
  open: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setGlobalCart: (state, data) => {
      state.cart = data.payload as Product[];
    },
    openCart: (state) => {
      state.open = true;
    },
    closeCart: (state) => {
      state.open = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGlobalCart, openCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
