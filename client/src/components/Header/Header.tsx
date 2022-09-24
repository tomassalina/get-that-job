import './Header.styles.scss'
import { Button } from '../Buttons'
import Logo from '../../assets/logo.png'
import { ProfileIcon } from '../Icons'

export const Header = () => {
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="Header__grid">
          <figure className="Header__logo">
            <img src={Logo} alt="Get That Job logo" />
          </figure>
          <Button type="secondary" text="Login" isLink to="/login">
            <ProfileIcon />
          </Button>
        </div>
      </div>
    </header>
  )
}
