import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryTypes } from "../types";

const initialState: CategoryTypes = {
  maxPrice: 0,
  sort: "",
};

const counterSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    handleSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { handleMaxPrice, handleSort } = counterSlice.actions;
export const categoryReducer = counterSlice.reducer;
