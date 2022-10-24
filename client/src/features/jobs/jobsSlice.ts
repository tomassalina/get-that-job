import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { RootState } from '../../app/store'
import { UserState } from '../user/type'

import { initialJobsList } from './initialJobsList'
import { Application, CreateJobPost, JobPost } from './type'

interface JobsState {
  list: JobPost[]
  applications: Application[]
  loading: boolean
}

const initialState: JobsState = {
  list: initialJobsList,
  loading: true,
  applications: [],
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    getJobsFromLocalStorage: state => {
      const jobsString = localStorage.getItem('jobs')
      const jobs: JobPost[] = jobsString
        ? JSON.parse(jobsString)
        : initialState.list

      if (jobs.length > 0) {
        jobs.forEach(job => {
          const exists = state.list.find(item => item.id === job.id)
          if (!exists) state.list.push(job)
        })
      }
      state.loading = false
    },

    getApplicationsFromLocalStorage: state => {
      const applicationsString = localStorage.getItem('applications')
      const applications: Application[] = applicationsString
        ? JSON.parse(applicationsString)
        : initialState.applications

      if (applications.length > 0) {
        console.log('LOCAL_STORAGE', applications)
        applications.forEach(application => {
          console.log(application)
          const exists = state.applications.find(
            item => item.jobId === application.jobId
          )
          if (!exists) state.applications.push(application)
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

    sendApplication: (state, action: PayloadAction<Application>) => {
      const newApplication = {
        jobId: action.payload.jobId,
        user: action.payload.user,
        interests: action.payload.interests,
      }

      state.applications.push(newApplication)

      const applicationsString = localStorage.getItem('applications')
      const applications: Application[] = applicationsString
        ? JSON.parse(applicationsString)
        : initialState
      if (applications.length > 0) {
        localStorage.setItem(
          'applications',
          JSON.stringify([...applications, newApplication])
        )
      } else {
        localStorage.setItem('applications', JSON.stringify([newApplication]))
      }
    },
  },
})

export const getJobs = (state: RootState) => state.jobs

export const {
  getJobsFromLocalStorage,
  getApplicationsFromLocalStorage,
  createJob,
  sendApplication,
} = jobsSlice.actions
export default jobsSlice.reducer
