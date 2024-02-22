import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct, TProduct } from "../types";

type cartState = {
  list: CartProduct[];
};

const initialState: cartState = {
  list: [],
};

export const cartSLice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const product = state.list.find((prod) => prod.id === action.payload.id);

      if (!product) {
        state.list.push({ ...action.payload, count: 1 });
      } else {
        product.count += 1;
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((prod) => prod.id !== action.payload);
    },
    increaseProductCount: (state, action: PayloadAction<number>) => {
      const product = state.list.find((prod) => prod.id === action.payload);

      if (product) {
        product.count += 1;
      }
    },
    decreaseProductCount: (state, action: PayloadAction<number>) => {
      const product = state.list.find((prod) => prod.id === action.payload);

      if (product) {
        product.count -= 1;
      }
    },
  },
});

export const { addToCart, deleteFromCart, increaseProductCount, decreaseProductCount } = cartSLice.actions;
export const cartReducer = cartSLice.reducer;
