import { useSelector } from 'react-redux'
import { getUser } from '../../../features/user/userSlice'
import { ProfessionalForm, RecruiterForm } from './roles'

import './Profile.styles.scss'

export const Profile = () => {
  const user = useSelector(getUser)

  if (user.role === 'professional') return <ProfessionalForm />
  if (user.role === 'recruiter') return <RecruiterForm />

  return <p>Loading...</p>
}
