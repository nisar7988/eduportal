import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isValid: false,
};

const Reducer = createSlice({
  name: "LogIn",
  initialState,
  reducers: {
    valid: (state) => {
      state.isValid = true;
    },
    invalid: (state) => {
      state.isValid = false;
    },
  },
});

export const { valid, invalid } = Reducer.actions;

export default Reducer.reducer;
