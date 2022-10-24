import './Footer.styles.scss'
import GithubLogo from '../../assets/github-logo.svg'

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__copy">
        <p>© 2022 - Get That Job</p>
        <p>Alkemy - Skill Up React</p>
      </div>
      <div className="Footer__members">
        <p>
          Build with <span>❤</span> by:
        </p>
        <ul>
          <li>
            <a href="https://github.com/salinatomass/" target="_blank">
              <img src={GithubLogo} alt="GitHub logo" />
              <span>Tomas Salina</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Marquisl2/" target="_blank">
              <img src={GithubLogo} alt="GitHub logo" />
              <span>Marcos Laurens</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/cataldoIvan/" target="_blank">
              <img src={GithubLogo} alt="GitHub logo" />
              <span>Cataldo Ivan</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="Footer__technologies">
        <p>Source code:</p>
        <p>
          <a
            href="https://github.com/salinatomass/get-that-job/"
            target="_blank"
          >
            Node.js REST API
          </a>
        </p>
        <p>
          <a
            href="https://github.com/salinatomass/get-that-job/"
            target="_blank"
          >
            React App
          </a>
        </p>
      </div>
    </footer>
  )
}
