import { createSlice } from "@reduxjs/toolkit";

interface Userinfo {
  id: number;
  text: string;
}

interface LoginState {
  userinfo: Userinfo[];
}

const initialState: LoginState = {
  userinfo: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addUserinfo: (state, action) => {
      state.userinfo.push({ id: Date.now(), text: action.payload });
    },
  },
});

export const { addUserinfo } = loginSlice.actions;

export default loginSlice.reducer;
