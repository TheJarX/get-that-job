import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeGetRequest, API_URL } from "../../utils";

const prefix = "company";

export const companyFetched = createAsyncThunk(
  prefix + "/companyFetched",
  async (companyId) => {
    return makeGetRequest(`${API_URL}/companies/${companyId}`);
  }
);

const CompanySlice = createSlice({
  name: prefix,
  initialState: {
    isFetching: true,
    company: null,
  },
  reducers: {
    isFetchingSet: (state, payload) => (state.isFetching = Boolean(payload)),
  },
  extraReducers: {
    [companyFetched.fulfilled]: (state, { payload }) => {
      state.company = payload;
      state.isFetching = false;
    },
  },
});

// export const {} = CompanySlice.actions

export default CompanySlice.reducer;
