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
  async ({ jobId, user, data }) => {
    data.append("userId", user.id);

    try {
      const response = await fetch(`${API_URL}/jobs/${jobId}/apply`, {
        method: "POST",
        body: data,
        headers: {
          "Key-Inflection": "camel",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const responseData = await response.json();
      if (!response.ok) return { error: responseData };
      return responseData;
    } catch (error) {
      return { error };
    }
  }
);

const UserSlice = createSlice({
  name: prefix,
  initialState: {
    applications: null,
    isFetching: true,
  },
  reducers: {
    isFetchingSet: (state, payload) => {
      state.isFetching = Boolean(payload);
    },
  },
  extraReducers: {
    [applicationsFetched.fulfilled]: (state, { payload: applications }) => {
      state.applications = applications;
      if (applications) state.isFetching = false;
    },
    [jobApplied.fulfilled]: (state, { payload: application }) => {
      if ("error" in application) return;
      const applications = state.applications?.slice() || [];
      applications.push(application);
      return { ...state, applications };
    },
  },
});

export const { isFetchingSet } = UserSlice.actions;

export default UserSlice.reducer;
