import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  shcedules: [],
  enteredTitle: "",
};
const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    TITLE_HANDLER: (state, action) => {
      state.enteredTitle = action.payload;
    },
  },
});
export const scheduleActions = scheduleSlice.actions;
export default scheduleSlice.reducer;
