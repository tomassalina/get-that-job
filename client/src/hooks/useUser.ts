import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export interface User {
  role: 'professional' | 'recruiter' | ''
  email: string
  isAuthenticated: boolean
}

const initialUser: User = {
  role: '',
  email: '',
  isAuthenticated: false,
}

export const useUser = () => {
  const { user: auth0User, logout: auth0Logout } = useAuth0()

  const [user, setUser] = useState<User>(initialUser)

  const logout = () => {
    localStorage.removeItem('user')
    auth0Logout()
  }

  useEffect(() => {
    const userString = localStorage.getItem('temporalUser')
    if (userString) {
      setUser({ ...JSON.parse(userString), isAuthenticated: false })
    }
  }, [])

  return { user, logout }
}
