import './Home.styles.scss'
import { User, useUser } from '../../../hooks/useUser'

interface HomeProps {
  user: User
}

export const Home = () => {
  const { user } = useUser()

  if (user.role === 'professional')
    return (
      <div className="Home">
        <h1>Professional</h1>
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
