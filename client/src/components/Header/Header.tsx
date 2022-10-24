import { useDispatch } from 'react-redux'

import './Header.styles.scss'

import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../Buttons'
import LogoImg from '../../assets/logo.png'
import { AuthIcon, LogoutIcon } from '../Icons'

import { logoutUser } from '../../features/user/userSlice'

export const Header = () => {
  const dispatch = useDispatch()
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

  const handleLogin = () => loginWithRedirect()
  const handleLogout = () => {
    dispatch(logoutUser())
    logout()
  }

  return (
    <header className="Header">
      <div className="wrapper">
        <div className="Header__grid">
          <Link to="/" className="Header__logo">
            <img src={LogoImg} alt="Get That Job logo" />
          </Link>
          {isAuthenticated ? (
            <Button type="secondary" text="Logout" handleClick={handleLogout}>
              <LogoutIcon />
            </Button>
          ) : (
            <Button type="secondary" text="Login" handleClick={handleLogin}>
              <AuthIcon />
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
