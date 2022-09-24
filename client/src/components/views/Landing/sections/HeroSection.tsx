import HeroImg from '../../../../assets/hero.svg'
import { Button } from '../../../Buttons'

export const HeroSection = () => {
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
          <Button text="create an account now" icon="" type="primary" large />
          <figure className="Hero__image">
            <img src={HeroImg} alt="Illustation of many professionals" />
          </figure>
        </div>
      </div>
    </section>
  )
}
