import { useSelector } from 'react-redux'
import { getUser, getUserIsLoading } from '../../../features/user/userSlice'

import './Home.styles.scss'
import { JobCard, JobPostCard } from '../../Cards'
import { initialState, initialJobPosts } from './initialState'

export const Home = () => {
  const user = useSelector(getUser)
  const isLoading = useSelector(getUserIsLoading)

  if (isLoading) return <p>Loading...</p>

  if (user.role === 'professional')
    return (
      <div className="Home">
        <h1 className="Home__title">Find That Job</h1>
        <div className="Home__grid">
          {initialState.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    )

  if (user.role === 'recruiter')
    return (
      <div className="Home">
        <h1>Recruiter</h1>
        {initialJobPosts.map(jobPost => (
          <JobPostCard key={jobPost.id} jobPost={jobPost} />
        ))}
      </div>
    )

  return <p>Loading...</p>
}
