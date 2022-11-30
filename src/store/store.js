import { configureStore } from "@reduxjs/toolkit";
import fatcaSlice from "./fatca-slice";
import personalSlice from "./personal-slice";
import documentsSlice from "./documents-slice";
import idSlice from "./id-slice";

const store = configureStore({
  reducer: {
    personal: personalSlice,
    fatca: fatcaSlice,
    docs: documentsSlice,
    id: idSlice,
  },
});

export default store;
