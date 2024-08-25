import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../types";

const initialState: ProductTypes = {
  selectedImg: "img",
  quantity: 1,
  open: false,
};

const counterSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleSelectedImgOne: (state) => {
      state.selectedImg = "img";
    },
    handleSelectedImgTwo: (state) => {
      state.selectedImg = "img2";
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    handleOpenCart: (state) => {
      state.open = !state.open;
    },
  },
});

export const {
  handleSelectedImgOne,
  handleSelectedImgTwo,
  setQuantity,
  handleOpenCart,
} = counterSlice.actions;
export const productReducer = counterSlice.reducer;
