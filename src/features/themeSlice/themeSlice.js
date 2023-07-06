import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    changeTheme: (state, action) => ({
      state: action.payload,
    }),
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
