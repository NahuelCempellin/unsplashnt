import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: [],
  reducers: {
    getUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { getUser } = loginSlice.actions;
export default loginSlice.reducer;
