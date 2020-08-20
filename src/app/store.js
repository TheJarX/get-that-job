import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/AuthSlice";
import JobReducer from "../features/jobs/JobsSlice";
import CompanyReducer from "../features/companies/CompanySlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    job: JobReducer,
    company: CompanyReducer,
  },
});
