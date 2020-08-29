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
      return {
        ...state,
        jobs,
        isFetching: jobs.length ? false : state.isFetching,
      };
    },
    [jobFetched.fulfilled]: (state, { payload: job }) => {
      return {
        ...state,
        selectedJob: job,
        isFetching: !!job?.error,
      };
    },
  },
});

export const { isFetchingSet } = JobsSlice.actions;

export default JobsSlice.reducer;
