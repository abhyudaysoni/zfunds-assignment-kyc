import { configureStore } from "@reduxjs/toolkit";
import fatcaSlice from "./fatca-slice";
import personalSlice from "./personal-slice";

const store = configureStore({
  reducer: {
    personal: personalSlice,
    fatca: fatcaSlice,
  },
});

export default store;
