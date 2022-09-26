import { useAuth0 } from '@auth0/auth0-react'
import HeroImg from '../../../../assets/hero.svg'
import { Button } from '../../../Buttons'
import { IconButton } from '../../../Buttons/IconButton'

export const HeroSection = () => {
  const { loginWithRedirect } = useAuth0()

  const handleAuth0 = () => loginWithRedirect()

  return (
    <section className="Hero">
      <div className="wrapper">
        <div className="Hero__grid">
          <h1>
            The place where you get <span>that</span> job
          </h1>
          <h3>
            With our Machine Learning algorithm you will get that job in no
            time. We promise you! Just give us the money and we will take care
            of it.
          </h3>
          <Button
            type="primary"
            text="create an account now"
            large
            handleClick={handleAuth0}
          />
          <figure className="Hero__image">
            <img src={HeroImg} alt="Illustation of many professionals" />
          </figure>
        </div>
      </div>
    </section>
  )
}
