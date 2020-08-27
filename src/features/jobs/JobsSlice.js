import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  makeRequest,
  makeRequestWithToken,
  makeGetRequest,
  API_URL,
} from "../../utils";

const prefix = "job";

export const jobsFetched = createAsyncThunk(
  prefix + "/jobsFetched",
  async () => {
    return makeGetRequest(`${API_URL}/jobs`, "GET");
  }
);

export const jobFetched = createAsyncThunk(
  prefix + "/jobFetched",
  async (jobId) => {
    return makeGetRequest(`${API_URL}/jobs/${jobId}`);
  }
);

const JobsSlice = createSlice({
  name: prefix,
  initialState: {
    isFetching: true,
    jobs: null,
    selectedJob: null,
  },
  reducers: {
    isFetchingSet: (state, payload) => {
      state.isFetching = Boolean(payload);
    },
  },
  extraReducers: {
    [jobsFetched.fulfilled]: (state, { payload: jobs }) => {
      state.jobs = jobs;
      state.isFetching = false;
    },
    [jobFetched.fulfilled]: (state, { payload: job }) => {
      state.selectedJob = job;
      state.isFetching = false;
    },
  },
});

export const { isFetchingSet } = JobsSlice.actions;

export default JobsSlice.reducer;
