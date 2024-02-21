import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popupSlice",
  initialState: {
    popupShown: false,
  },
  reducers: {
    showPopup: (state) => {
      state.popupShown = true;
    },
    hidePopup: (state) => {
      state.popupShown = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;
export const popupReducer = popupSlice.reducer;
