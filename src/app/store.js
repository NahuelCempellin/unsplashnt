import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice/themeSlice";
import loginReducer from "../features/loginSlice/loginSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    login: loginReducer,
  },
});
