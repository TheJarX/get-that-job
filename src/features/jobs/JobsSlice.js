import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest, makeGetRequest, API_URL } from "../../utils";

const prefix = "job";

export const jobsFetched = createAsyncThunk(
  prefix + "/jobsFetched",
  async () => {
    return makeGetRequest(API_URL + "/jobs", "GET");
  }
);

const JobsSlice = createSlice({
  name: prefix,
  initialState: {
    isFetching: true,
    jobs: null,
  },
  reducers: {},
  extraReducers: {
    [jobsFetched.fulfilled]: (state, { payload }) => {
      state.jobs = payload;
      state.isFetching = false;
    },
  },
});

// export const {} = JobsSlice.actions

export default JobsSlice.reducer;
