import { createSlice } from "@reduxjs/toolkit";
import { ProductTypes } from "../types";

const initialState: ProductTypes = {
  selectedImg: 0,
};

const counterSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleSelectedImgOne: (state) => {
      state.selectedImg = 0;
    },
    handleSelectedImgTwo: (state) => {
      state.selectedImg = 1;
    },
  },
});

export const { handleSelectedImgOne, handleSelectedImgTwo } =
  counterSlice.actions;
export const productReducer = counterSlice.reducer;
