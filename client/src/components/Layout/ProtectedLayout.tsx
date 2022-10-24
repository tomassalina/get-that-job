import { Outlet, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Navbar, NavbarMenu } from '../Navbar'
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
      <NavbarMenu />
      <section className="Container">
        <Outlet />
      </section>
    </div>
  )
}
