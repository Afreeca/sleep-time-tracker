import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { CreateSleepRecords, SleepRecord } from "../types";

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

export type SleepInfo = {
  name: string;
  gender: string;
  duration: number;
};

export const createSleepRecord = createAsyncThunk<
  CreateSleepRecords,
  SleepInfo,
  { rejectValue: string }
>("createSleepRecord", async (sleepRecord, thunkAPI) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/sleep-record`,
      sleepRecord
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      `Failed to create sleep time records: ${(error as AxiosError).message}`
    );
  }
});

export const fetchSleepRecords = createAsyncThunk<
  SleepRecord[],
  void,
  { rejectValue: string }
>("fetchSleepRecords", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${apiUrl}/api/sleep-record`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      `Failed to fetch sleep time records: ${(error as AxiosError).message}`
    );
  }
});

export const fetchUserSleepRecords = createAsyncThunk<
  SleepRecord[],
  string,
  { rejectValue: string }
>("fetchUserSleepRecords", async (name, thunkAPI) => {
  try {
    const response = await axios.get(`${apiUrl}/api/sleep-record/user`, {
      params: { name },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      `Failed to fetch user's sleep time records: ${
        (error as AxiosError).message
      }`
    );
  }
});
