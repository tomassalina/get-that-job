import { useAuth0 } from '@auth0/auth0-react'

export const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  if (isAuthenticated) return <button onClick={() => logout()}>Logout</button>
  return <button onClick={() => loginWithRedirect()}>Log in</button>
}
