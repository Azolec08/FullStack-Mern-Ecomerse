import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "../types";

const initialState: CounterState = {
  value: 0,
  open: false,
  name: "",
  currentSlide: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    handleOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    highIncrement: (state, action) => {
      state.value += action.payload;
    },
    nameValue: (state, action) => {
      state.name = action.payload;
    },
    handleCarousel: (state, action) => {
      state.currentSlide = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  highIncrement,
  handleOpen,
  nameValue,
  handleCarousel,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
