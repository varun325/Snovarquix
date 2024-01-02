// reducers/profile.ts
import { createSlice } from "@reduxjs/toolkit";

export interface ProfileState {
  username: string;
  email: string;
  exp: string;
}

const initialState: ProfileState = {
  username: "",
  email: "",
  exp: "", // Change the initial value to an empty string
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      // action.payload should be an object with username, email, and exp
      return { ...state, ...action.payload };
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
