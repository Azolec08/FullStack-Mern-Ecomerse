import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./categorySlices";
import { counterReducer } from "./counterSlices.";
import { productReducer } from "./productSlices";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
    product: productReducer,
  },
});
