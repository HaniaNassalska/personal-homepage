import { createSlice } from '@reduxjs/toolkit';
import { getGitHubRepo } from './getGitHubRepo';

const homepageSlice = createSlice({
 name: 'portfolio',
 initialState: {
  status: "pending",
 projects: [],
 },
 reducers: {
fetchDownloadingProjectsPending: state => {
  state.status = "pending";

 },
 fetchDownloadProjectsSuccess:  (state, {payload: projects}) => {
  projects = getGitHubRepo.respone;
  state.status = "success";
},
 fetchDownloadingPortfolioError: state => {
  state.status = "error";
 }
}});
export const { 
  fetchDownloadingProjectsPending,
  fetchDownloadProjectsSuccess,
  fetchDownloadingProjectsError
 } = homepageSlice.actions;

export const selectPortfolioState = state => state.portfolio;
export const selectStatus = state => selectPortfolioState(state).status;
export const selectProjects = state => selectPortfolioState(state).projects; 
export default homepageSlice.reducer;

