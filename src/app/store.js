import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice/themeSlice";
import loginReducer from "../features/loginSlice/loginSlice";
import userPhotosReducer from "../features/getPhotosSlice/getPhotosSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    login: loginReducer,
    photos: userPhotosReducer,
  },
});
