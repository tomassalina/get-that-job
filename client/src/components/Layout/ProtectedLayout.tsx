import { Outlet, Navigate } from 'react-router-dom'
import { Navbar } from '../Navbar'
import './Layout.style.scss'

export const ProtectedLayout = () => {
  const user = JSON.parse(
    localStorage.getItem('user') || '{"role":"","email":""}'
  )
  const hasUser = user.role && user.email

  if (!hasUser) return <Navigate to="/" replace />

  return (
    <div className="Grid">
      <Navbar user={user} />
      <section className="Container">
        <Outlet />
      </section>
    </div>
  )
}
