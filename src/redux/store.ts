import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import { cartReducer } from "./cartSlice";
import { popupReducer } from "./popupSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    popup: popupReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
