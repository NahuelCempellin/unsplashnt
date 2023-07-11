import { createSlice } from "@reduxjs/toolkit";

export const getPhotos = createSlice({
  name: "photos",
  initialState: { photos: [] },
  reducers: {
    getPhoto: (state, action) => {
      if (state.photos[0]._id) state.photos.push(action.payload);
    },
  },
});

export const { getPhoto } = getPhotos.actions;
export default getPhotos.reducer;
