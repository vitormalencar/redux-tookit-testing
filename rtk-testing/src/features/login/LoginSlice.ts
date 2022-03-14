import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { authRequest } from "./LoginApi";

export interface CounterState {
  authorized: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  authorized: false,
  status: "idle",
};

export const authenticate = createAsyncThunk("login/authenticate", async () => {
  const response = await authRequest();
  return response.data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.status = "idle";
        state.authorized = action.payload;
      });
  },
});

export const selectAuthorized = (state: RootState) => state.login.authorized;
export const selectLoginStatus = (state: RootState) => state.login.status;

export default loginSlice.reducer;
