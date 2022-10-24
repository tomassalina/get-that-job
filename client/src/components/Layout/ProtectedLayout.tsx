import { Outlet, Navigate } from 'react-router-dom'
import { Navbar, NavbarMenu } from '../Navbar'
import './Layout.style.scss'

export const ProtectedLayout = () => {
  const user = JSON.parse(
    localStorage.getItem('temporalUser') || '{"role":"","email":""}'
  )
  const hasUser = user.role && user.email

  if (!hasUser) return <Navigate to="/" replace />

  return (
    <div className="Grid">
      <Navbar user={user} />
      <NavbarMenu />
      <section className="Container">
        <Outlet />
      </section>
    </div>
  )
}
