import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { RootState } from '../../app/store'

import { initialJobsList } from './initialJobsList'
import { CreateJobPost, JobPost } from './type'

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

      if (jobs.length > 0) {
        jobs.forEach((job, index) => {
          const exists = state.list.find(item => item.id === job.id)
          if (!exists) state.list.push(job)
        })
      }
      state.loading = false
    },

    createJob: (state, action: PayloadAction<CreateJobPost>) => {
      const newJob: JobPost = {
        id: uuid(),
        title: action.payload.title,
        category: action.payload.category,
        type: action.payload.type,
        salaryRange: {
          min: action.payload.salaryRangeMin,
          max: action.payload.salaryRangeMax,
        },
        aboutPosition: action.payload.aboutPosition,
        requirements: action.payload.requirements,
        optionalRequirements: action.payload.optionalRequirements,

        company: action.payload.company,
        applicants: [],
        status: 'waiting',
        createdOn: new Date().toLocaleString(),
      }
      state.list.push(newJob)

      const jobsString = localStorage.getItem('jobs')
      const jobs: JobPost[] = jobsString ? JSON.parse(jobsString) : initialState
      if (jobs.length > 0) {
        localStorage.setItem('jobs', JSON.stringify([...jobs, newJob]))
      } else {
        localStorage.setItem('jobs', JSON.stringify([newJob]))
      }
    },
  },
})

export const getJobs = (state: RootState) => state.jobs

export const { getJobsFromLocalStorage, createJob } = jobsSlice.actions
export default jobsSlice.reducer
