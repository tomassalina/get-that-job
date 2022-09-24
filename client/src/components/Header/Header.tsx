import './Header.styles.scss'
import { Button } from '../Buttons'
import Logo from '../../assets/logo.png'
import ProfileIcon from '../../assets/icon-profile.svg'

export const Header = () => {
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="Header__grid">
          <figure className="Header__logo">
            <img src={Logo} alt="Get That Job logo" />
          </figure>
          <Button
            type="primary"
            text="Login"
            icon={ProfileIcon}
            isLink
            to="/login"
          />
        </div>
      </div>
    </header>
  )
}
