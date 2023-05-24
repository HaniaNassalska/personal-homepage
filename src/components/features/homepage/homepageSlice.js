import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "portfolio",
  initialState: {
    status: "",
    projects: [],
  },
  reducers: {
    fetchProjectsPending: (state) => {
      state.status = "pending";
    },
    fetchProjectsSuccess: (state, { payload: projects }) => {
      state.projects = projects;
      state.status = "success";
    },
    fetchProjectsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchProjectsPending,
  fetchProjectsSuccess,
  fetchProjectsError,
} = homepageSlice.actions;

export const selectPortfolioState = (state) => state.portfolio;
export const selectStatus = (state) => selectPortfolioState(state).status;
export const selectProjects = (state) => selectPortfolioState(state).projects;
export default homepageSlice.reducer;
