import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userPw: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    trylogin: (state, action) => {
      return;
    },
  },
});
export const { trylogin } = loginSlice.actions;
export default loginSlice.reducer;
