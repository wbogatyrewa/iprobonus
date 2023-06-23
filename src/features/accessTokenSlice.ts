import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AccessTokenState {
  value: string;
}

const initialState: AccessTokenState = {
  value: "",
};

export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
