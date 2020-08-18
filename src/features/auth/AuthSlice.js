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
      email: "hello@itsgerard.com",
      experience: "Full stack software developer",
      github_url: "123423",
      id: 3,
      linkedin_url: null,
      name: "Piero",
      phone: "Altamirano",
      token: "BrQyCJHsogeG7e2NV_oC",
    },
  },
  reducers: {},
  extraReducers: {
    [userLogged.fulfilled]: (state, { payload: profileData }) => {
      if (!profileData.error) {
        state.profileData = profileData;
      }
    },
  },
});

// export const {} = AuthSlice.actions

export default AuthSlice.reducer;
