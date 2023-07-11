import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: { user: [] },
  reducers: {
    getUser: (state, action) => {
      state.user.push(action.payload);
    },
    logoutUser: (state, action) => {
      if (action.payload === "logout") state.user.pop();
    },
  },
});

export const { getUser, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
