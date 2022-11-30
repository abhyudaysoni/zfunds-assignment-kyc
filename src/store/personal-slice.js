import { createSlice } from "@reduxjs/toolkit";

const intitialPersonalState = {
  name: "",
  married: null,
  fatherName: "",
  motherName: "",
  email: "",
  annualIncome: "",
  address: "",
  gender: "",
  dob: "",
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
    changeAddress(state, action) {
      state.address = action.payload;
    },
    changeGender(state, action) {
      state.gender = action.payload;
    },
    changeDob(state, action) {
      state.gender = action.payload;
    },
    resetPersonal(state, action) {
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
  changeAddress,
  changeGender,
  changeDob,
  resetPersonal,
} = personalSlice.actions;

export default personalSlice.reducer;
