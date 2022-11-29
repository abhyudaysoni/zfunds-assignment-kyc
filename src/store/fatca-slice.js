import { createSlice } from "@reduxjs/toolkit";

const initialFATCAState = {
  indianCitizen: false,
  indianTaxResident: false,
  notPoliticallyExposed: false,
};

const fatcaSlice = createSlice({
  name: "fatcaSlice",
  initialState: initialFATCAState,
  reducers: {
    setIndianCitizen(state, action) {
      state.indianCitizen = action.payload;
    },
    setIndianTaxResident(state, action) {
      state.indianTaxResident = action.payload;
    },
    setNotPoliticallyExposed(state, action) {
      state.notPoliticallyExposed = action.payload;
    },
  },
});

export const {
  setIndianCitizen,
  setIndianTaxResident,
  setNotPoliticallyExposed,
} = fatcaSlice.actions;

export default fatcaSlice.reducer;
