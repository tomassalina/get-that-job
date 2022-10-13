import './Home.styles.scss'
import { User } from '../../../hooks/useUser'

interface HomeProps {
  user: User
}

export const Home = ({ user }: HomeProps) => {
  if (user.role === 'professional')
    return (
      <div className="Home">
        <h1>Professional</h1>
      </div>
    )

  if (user.role === 'recruiter')
    return (
      <div className="home__container">
        <h1>Recruiter</h1>
      </div>
    )

  return <p>Loading...</p>
}
