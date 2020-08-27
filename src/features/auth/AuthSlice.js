import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, makeRequest } from "../../utils";
const prefix = "auth";

export const userLogged = createAsyncThunk(
  prefix + "/userLogged",
  async (loginData) =>
    await makeRequest(API_URL + "/user/signin", "POST", loginData)
);

const AuthSlice = createSlice({
  name: prefix,
  initialState: {
    profileType: "",
    profileData: {
      id: 1,
      name: "Elon Musk",
      email: "elon@musk.com",
      phone: "+1 123 4567890",
      experience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      github_url: "",
      linkedin_url: "",
      token: "vp1ih6jsbStUEqHtXsnU",
    },
  },
  reducers: {},
  extraReducers: {
    [userLogged.fulfilled]: (state, { payload: profileData }) => {
      if (!profileData.error) {
        state.profileData = profileData;
        state.profileType = "logoUrl" in profileData ? "company" : "user";
      }
    },
  },
});

// export const {} = AuthSlice.actions

export default AuthSlice.reducer;
