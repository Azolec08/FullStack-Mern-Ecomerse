import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // This uses localStorage as the default storage
import { cartReducer } from "./cartSlices";
import { categoryReducer } from "./categorySlices";
import { counterReducer } from "./counterSlices.";
import { productReducer } from "./productSlices";

// const stripe = require("stripe")(
//   "sk_test_51Ps5vEBHfjsWklQLHti3s6HcuvU5YXspa3jgXSos9LAdrRrX30YBOHfRwbRZmJ7WdyOzxYr4B91eBMhdXhe3M6b900s97veXy8"
// );
// Configuration for redux-persist
const persistConfig = {
  key: "root",
  version: 1,
  storage, // Uses localStorage to persist the state
  whitelist: ["cart"], // Specify which reducers you want to persist, e.g., 'cart'
};

// Root reducer combining all individual reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store to use the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Types for dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
