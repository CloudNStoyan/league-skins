import { configureStore } from "@reduxjs/toolkit";
import ddragonReducer from "./ddragonSlice";

export const store = configureStore({
  reducer: {
    ddragonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
