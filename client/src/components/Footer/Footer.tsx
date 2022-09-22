import './Footer.styles.scss'
import ReactLogo from '../../assets/react-logo.svg'

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="wrapper">
        <div className="Footer__grid">
          <p className="Footer__copy">© 2022 - Get That Job</p>
          <section>
            <p>Source code:</p>
            <div className="Footer__technologies">
              <a
                href="https://github.com/salinatomass/get-that-job"
                target="_blank"
              >
                <img src={ReactLogo} alt="React logo" /> React App
              </a>
              <a href="#">Node.js REST API</a>
            </div>
          </section>
          <p className="Footer__project">Alkemy - Skill Up React</p>
        </div>
      </div>
    </footer>
  )
}
