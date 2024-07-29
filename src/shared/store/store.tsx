import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlices.";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
