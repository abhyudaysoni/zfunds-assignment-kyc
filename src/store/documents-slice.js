import { createSlice } from "@reduxjs/toolkit";

const initialDocumentsState = {
  pan: "",
  signature: "",
  photo: "",
};

const documentsSlice = createSlice({
  name: "documentsSlice",
  initialState: initialDocumentsState,
  reducers: {
    setPan(state, action) {
      state.pan = action.payload;
    },
    setSignature(state, action) {
      state.signature = action.payload;
    },
    setPhoto(state, action) {
      state.photo = action.payload;
    },
    resetDocs(state, action) {
      state = initialDocumentsState;
      return state;
    },
  },
});

export const { setPan, setSignature, setPhoto, resetDocs } =
  documentsSlice.actions;

export default documentsSlice.reducer;
