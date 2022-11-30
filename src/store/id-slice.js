import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
  name: "idSlice",
  initialState: "",
  reducers: {
    setId(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setId } = idSlice.actions;

export default idSlice.reducer;
