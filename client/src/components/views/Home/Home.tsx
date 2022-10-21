import { useUser } from '../../../hooks/useUser'

import './Home.styles.scss'
import { JobCard, JobPostCard } from '../../Cards'
import { initialState, initialJobPosts } from './initialState'

export const Home = () => {
  const { user } = useUser()

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
          <JobPostCard jobPost={jobPost} />
        ))}
      </div>
    )

  return <p>Loading...</p>
}
