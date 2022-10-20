import { useUser } from '../../../hooks/useUser'
import { ProfessionalForm, RecruiterForm } from './roles'

import './Profile.styles.scss'

export const Profile = () => {
  const { user } = useUser()

  console.log(user)

  if (user.role === 'professional') return <ProfessionalForm />
  if (user.role === 'recruiter') return <RecruiterForm />

  return <p>Loading...</p>
}
