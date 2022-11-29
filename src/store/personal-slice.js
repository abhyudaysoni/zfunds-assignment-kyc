import { createSlice } from "@reduxjs/toolkit";

const intitialPersonalState = {
  married: null,
  fatherName: "",
  motherName: "",
  email: "",
  annualIncome: "",
};

const personalSlice = createSlice({
  name: "personalSlice",
  initialState: intitialPersonalState,
  reducers: {
    changeMaritalStatus(state, action) {
      state.married = action.payload;
    },
    changeFatherName(state, action) {
      state.fatherName = action.payload;
    },
    changeMotherName(state, action) {
      state.motherName = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeAnnualIncome(state, action) {
      state.annualIncome = action.payload;
    },
  },
});

export const {
  changeMaritalStatus,
  changeFatherName,
  changeMotherName,
  changeEmail,
  changeAnnualIncome,
} = personalSlice.actions;

export default personalSlice.reducer;
