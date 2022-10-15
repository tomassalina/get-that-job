import { Header } from '../Header'
import { Navigate, Outlet } from 'react-router-dom'

export const Layout = () => {
  const user = JSON.parse(
    localStorage.getItem('user') || '{"role":"","email":""}'
  )
  const hasUser = user.role && user.email

  if (hasUser) return <Navigate to="/home" replace={true} />

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
