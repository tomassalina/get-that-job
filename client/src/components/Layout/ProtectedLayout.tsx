import { Outlet, Navigate } from 'react-router-dom'
import { Navbar } from '../Navbar'

export const ProtectedLayout = () => {
  const user = JSON.parse(
    localStorage.getItem('user') || '{"role":"","email":""}'
  )
  const hasUser = user.role && user.email

  if (!hasUser) return <Navigate to={'/'} replace />

  return (
    <div className="Container">
      <Navbar />
      {<Outlet />}
    </div>
  )
}
