import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../types";

const initialState: ProductTypes = {
  selectedImg: 0,
  quantity: 1,
  open: false,
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
