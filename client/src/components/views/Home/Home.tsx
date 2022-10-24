import { useSelector } from 'react-redux'
import { getUser, getUserIsLoading } from '../../../features/user/userSlice'

import './Home.styles.scss'
import { JobCard, JobPostCard } from '../../Cards'
import { initialJobPosts } from './initialState'
import { getJobs } from '../../../features/jobs/jobsSlice'

export const Home = () => {
  const user = useSelector(getUser)
  const isLoading = useSelector(getUserIsLoading)

  const jobs = useSelector(getJobs)

  if (isLoading) return <p>Loading...</p>

  if (user.role === 'professional')
    return (
      <div className="Home">
        <h1 className="Home__title">Find That Job</h1>
        <div className="Home__grid">
          {jobs.list.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    )
  else
    return (
      <div className="Home">
        <h1>Recruiter</h1>
        {jobs.list.filter(job => job.company.id === user.id).length === 0 && (
          <p>No postings yet</p>
        )}
        {jobs.list
          .filter(job => job.company.id === user.id)
          .map(jobPost => (
            <JobPostCard key={jobPost.id} jobPost={jobPost} />
          ))}
      </div>
    )
}
