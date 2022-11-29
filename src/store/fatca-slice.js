import { createSlice } from "@reduxjs/toolkit";

const initialFATCAState = {
  indianCitizen: null,
  indianTaxResident: null,
  notPoliticallyExposed: null,
};

const fatcaSlice = createSlice({
  name: "fatcaSlice",
  initialState: initialFATCAState,
  reducers: {
    setIndianCitizen(state, action) {},
    setIndianTaxResident(state, action) {},
    setNotPoliticallyExposed(state, action) {},
  },
});

export const {
  setIndianCitizen,
  setIndianTaxResident,
  setNotPoliticallyExposed,
} = fatcaSlice.actions;

export default fatcaSlice.reducer;
