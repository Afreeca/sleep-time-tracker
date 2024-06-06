/**
 * Next's multi-page architecture requires some differences from that single-page app setup. Creating a Redux Store per Request
 * The first change is to move from defining store as a global or module-singleton variable, to defining a makeStore function
 * that returns a new store for each request:
 */

import { configureStore } from "@reduxjs/toolkit";
import sleepRecordReducer from "./features/sleepRecord/sleepRecordSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sleepRecord: sleepRecordReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
