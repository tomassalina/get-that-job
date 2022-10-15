import { useState, useEffect } from 'react'

export interface User {
  role: 'professional' | 'recruiter' | ''
  email: string
}

export const useUser = () => {
  const [user, setUser] = useState<User>({
    role: '',
    email: '',
  })

  useEffect(() => {
    const userString = localStorage.getItem('user')
    if (userString) {
      setUser(JSON.parse(userString))
    }
  }, [])

  return { user,setUser }
}
