import { useUser } from '../../../hooks/useUser'

import './Home.styles.scss'
import { JobCard } from '../../Cards'
import { NavbarMenu } from '../../Navbar'

export const Home = () => {
  const { user } = useUser()

  if (user.role === 'professional')
    return (
      <div className="Home">
        <div className="Home__menu">
          <h1 className="Home__title">Find That Job</h1>
          <NavbarMenu />
        </div>
        <div className="Home__grid">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    )

  if (user.role === 'recruiter')
    return (
      <div className="Home">
        <h1>Recruiter</h1>
      </div>
    )

  return <p>Loading...</p>
}
