import './Header.styles.scss'

import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../Buttons'
import LogoImg from '../../assets/logo.png'
import { AuthIcon, LogoutIcon } from '../Icons'

export const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const handleAuth0 = () => loginWithRedirect()
  const handleLogout = () => logout()

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
            <Button type="secondary" text="Login" handleClick={handleAuth0}>
              <AuthIcon />
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
