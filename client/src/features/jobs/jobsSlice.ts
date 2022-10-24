import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

import { initialJobsList } from './initialJobsList'
import { JobPost } from './type'

interface JobsState {
  list: JobPost[]
  loading: boolean
}

const initialState: JobsState = {
  list: initialJobsList,
  loading: true,
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    getJobsFromLocalStorage: state => {
      const jobsString = localStorage.getItem('jobs')
      const jobs: JobPost[] = jobsString ? JSON.parse(jobsString) : initialState

      state.list = jobs
      state.loading = true
    },
  },
})

export const getJobs = (state: RootState) => state.jobs

export const {} = jobsSlice.actions
export default jobsSlice.reducer
