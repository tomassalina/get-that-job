import './Header.styles.scss'

import { Link } from 'react-router-dom'
import { Button } from '../Buttons'
import LogoImg from '../../assets/logo.png'
import { AuthIcon } from '../Icons'

export const Header = () => {
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="Header__grid">
          <Link to="/" className="Header__logo">
            <img src={LogoImg} alt="Get That Job logo" />
          </Link>
          <Button type="secondary" text="Login" isLink to="/login">
            <AuthIcon />
          </Button>
        </div>
      </div>
    </header>
  )
}
