import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserBonusState {
  currentQuantity: number;
  forBurningQuantity: number;
  dateBurning: string;
}

const initialState: UserBonusState = {
  currentQuantity: 0,
  forBurningQuantity: 0,
  dateBurning: "",
};

export const userBonusSlice = createSlice({
  name: "userBonus",
  initialState,
  reducers: {
    setUserBonus: (state, action: PayloadAction<UserBonusState>) => {
      state.currentQuantity = action.payload.currentQuantity;
      state.forBurningQuantity = action.payload.forBurningQuantity;
      state.dateBurning = action.payload.dateBurning;
    },
  },
});

export const { setUserBonus } = userBonusSlice.actions;

export default userBonusSlice.reducer;
