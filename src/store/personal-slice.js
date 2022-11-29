import { createSlice } from "@reduxjs/toolkit";

const intitialPersonalState = {
  name: "",
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
    changeName(state, action) {
      state.name = action.payload;
    },
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
    resetState(state, action) {
      state.name = intitialPersonalState.name;
      state.married = intitialPersonalState.married;
      state.fatherName = intitialPersonalState.fatherName;
      state.motherName = intitialPersonalState.motherName;
      state.email = intitialPersonalState.email;
      state.annualIncome = intitialPersonalState.annualIncome;
    },
  },
});

export const {
  changeName,
  changeMaritalStatus,
  changeFatherName,
  changeMotherName,
  changeEmail,
  changeAnnualIncome,
  resetState,
} = personalSlice.actions;

export default personalSlice.reducer;
