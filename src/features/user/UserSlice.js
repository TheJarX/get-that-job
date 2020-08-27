import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, makeRequestWithToken } from "../../utils";

const prefix = "user";

export const applicationsFetched = createAsyncThunk(
  prefix + "/applicationsFetched",
  async (user) => {
    return makeRequestWithToken({
      url: `${API_URL}/users/${user.id}/applications`,
      token: user.token,
    });
  }
);

export const jobApplied = createAsyncThunk(
  prefix + "/jobApplied",
  // applicationData : { professionalExperience, reasons, cv}
  async (jobId, user, applicationData) => {
    const body = {
      userId: user.id,
      ...applicationData,
    };
    return makeRequestWithToken({
      url: `${API_URL}/jobs/${jobId}/apply`,
      token: user.token,
      method: "POST",
      body,
    });
  }
);

const UserSlice = createSlice({
  name: prefix,
  initialState: {
    applications: null,
    isFetching: true,
  },
  reducers: {},
  extraReducers: {
    [applicationsFetched.fulfilled]: (state, { payload: applications }) => {
      state.isFetching = false;
      state.applications = applications;
    },
    [jobApplied.fulfilled]: (state, { payload: application }) => {
      state.applications.push(application);
    },
  },
});

// export const {} = UserSlice.action

export default UserSlice.reducer;
