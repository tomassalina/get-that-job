import GitHubLogo from '../../../../assets/github-logo.svg'
import LinkedInLogo from '../../../../assets/linkedin-logo.svg'

export const TeamMember = ({ data }) => {
  const { name, avatar, social } = data
  return (
    <li className="Team__member">
      <img
        className="Team__member--image"
        src={avatar}
        alt="Tomas Salina avatar"
      />
      <h4 className="Team__member--name">{name}</h4>
      <div className="Team__member--social">
        <a href={social?.github} target="_blank">
          <img src={GitHubLogo} alt="GitHub logo" />
        </a>
        <a href={social.linkedin} target="_blank">
          <img src={LinkedInLogo} alt="LinkedIn logo" />
        </a>
      </div>
    </li>
  )
}
