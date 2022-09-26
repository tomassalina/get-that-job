import ReactLogo from '../../../../assets/react-logo.svg'

export const FooterSection = () => {
  return (
    <footer className="FooterSection">
      <div className="wrapper">
        <div className="FooterSection__grid">
          <p className="FooterSection__copy">© 2022 - Get That Job</p>
          <section>
            <p>Source code:</p>
            <div className="FooterSection__technologies">
              <a
                href="https://github.com/salinatomass/get-that-job"
                target="_blank"
              >
                <img src={ReactLogo} alt="React logo" /> React App
              </a>
              <a href="#">Node.js REST API</a>
            </div>
          </section>
          <p className="FooterSection__project">Alkemy - Skill Up React</p>
        </div>
      </div>
    </footer>
  )
}
