import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
    //add here all your slices
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch