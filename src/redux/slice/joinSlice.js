import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: { id: "", password: "" },
};

const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {
    register: (state, action) => {
      return { ...state, users: action.payload };
    },
  },
});
export const { register } = joinSlice.actions;
export default joinSlice.reducer;
