import HeroImg from '../../../assets/hero.svg'

export const Hero = () => {
  return (
    <section className="Hero">
      <div className="wrapper">
        <div className="Hero__grid">
          <h1 className="Hero__title">
            The place where you get <span>that</span> job
          </h1>
          <h3 className="Hero__subtitle">
            With our Machine Learning algorithm you will get that job in no
            time. We promise you! Just give us the money and we will take care
            of it.
          </h3>
          <button type="button">create an account now</button>
          <figure className="Hero__image">
            <img src={HeroImg} alt="Illustation of many professionals" />
          </figure>
        </div>
      </div>
    </section>
  )
}
