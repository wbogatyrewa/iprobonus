import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from "../features/accessTokenSlice";
import userBonusReducer from "../features/userBonusSlice";

export const store = configureStore({
  reducer: {
    accessToken: accessTokenReducer,
    userBonus: userBonusReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
