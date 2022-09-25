import './Header.styles.scss'
import Logo from '../../assets/logo.png'
import { Button } from '../Button/Button'

export const Header = () => {
  return (
    <header className="Header">
      <div className="wrapper">
        <div className="Header__grid">
          <figure className="Header__logo">
            <img src={Logo} alt="Get That Job logo" />
          </figure>
          <Button text='LOGIN'/>
        </div>
      </div>
    </header>
  )
}
