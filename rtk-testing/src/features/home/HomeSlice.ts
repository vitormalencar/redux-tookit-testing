import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchUsersRequest } from "./homeAPI";
import { User } from "./types";

export interface CounterState {
  users: User[];
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  users: [],
  status: "idle",
};

export const fetchUsers = createAsyncThunk("home/fetchUsers", async () => {
  const response = await fetchUsersRequest();
  return response.results;
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      });
  },
});

export const selectUsers = (state: RootState) => state.home.users;
export const selectHomeStatus = (state: RootState) => state.home.status;

export default homeSlice.reducer;
