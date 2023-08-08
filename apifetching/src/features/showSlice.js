import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };

export const showSlice = createSlice({
  name: "showData",
  initialState,
  reducers: {
    addData: (state, action) => {},
    showData: (state, action) => {},
  },
});

export const { addData, showData } = showSlice.actions;
export default showSlice.reducer;
