import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import { SleepRecord } from "../types";
import {
  createSleepRecord,
  fetchSleepRecords,
  fetchUserSleepRecords,
} from "./sleepRecordAPI";

type SleepRecordState = {
  records: SleepRecord[] | undefined;
  loading: boolean;
  userRecords: SleepRecord[] | undefined;
  successMessage: string | undefined;
  error: string | undefined;
};

const initialState: SleepRecordState = {
  records: undefined,
  userRecords: undefined,
  loading: false,
  successMessage: undefined,
  error: undefined,
};

const sleepRecordSlice = createSlice({
  name: "sleepRecord",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = initialState.error;
      state.successMessage = initialState.successMessage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSleepRecords.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchSleepRecords.fulfilled, (state, action) => {
        state.loading = false;
        state.records = action.payload;
      })
      .addCase(fetchSleepRecords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createSleepRecord.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(createSleepRecord.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = "Sleep record created successfully!";
      })
      .addCase(createSleepRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserSleepRecords.pending, (state) => {
        state.error = undefined;
      })
      .addCase(fetchUserSleepRecords.fulfilled, (state, action) => {
        state.userRecords = action.payload;
      })
      .addCase(fetchUserSleepRecords.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearError } = sleepRecordSlice.actions;
export const selectSleepRecord = (state: RootState) => state.sleepRecord;
export const selectUserSleepRecord = (state: RootState) =>
  state.sleepRecord.userRecords;

export default sleepRecordSlice.reducer;
