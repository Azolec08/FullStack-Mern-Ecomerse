import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryTypes } from "../types";

const initialState: CategoryTypes = {
  maxPrice: 600,
  sort: "asc",
  selectedCats: [],
};

const counterSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setHandleMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setHandleSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setSelectedCats: (state, action: PayloadAction<number[]>) => {
      state.selectedCats = action.payload;
    },
  },
});

export const { setHandleMaxPrice, setHandleSort, setSelectedCats } =
  counterSlice.actions;
export const categoryReducer = counterSlice.reducer;
