import Avatar1 from '../../../assets/avatar-1.png'
import Avatar2 from '../../../assets/avatar-2.png'
import { TeamMember } from './TeamMember'

export const TeamSection = () => {
  return (
    <section className="Team">
      <div className="wrapper">
        <div className="Team__grid">
          <h3>Meet the team</h3>
          <ul className="Team__list">
            <TeamMember
              data={{
                name: 'Tomas Salina',
                avatar: Avatar1,
                social: {
                  github: 'https://github.com/salinatomass/',
                  linkedin: 'https://linkedin.com/in/salinatomass/',
                },
              }}
            />
            <TeamMember
              data={{
                name: 'Tomas Salina',
                avatar: Avatar2,
                social: {
                  github: 'https://github.com/salinatomass/',
                  linkedin: 'https://linkedin.com/in/salinatomass/',
                },
              }}
            />
            <TeamMember
              data={{
                name: 'Tomas Salina',
                avatar: Avatar1,
                social: {
                  github: 'https://github.com/salinatomass/',
                  linkedin: 'https://linkedin.com/in/salinatomass/',
                },
              }}
            />
            <TeamMember
              data={{
                name: 'Tomas Salina',
                avatar: Avatar2,
                social: {
                  github: 'https://github.com/salinatomass/',
                  linkedin: 'https://linkedin.com/in/salinatomass/',
                },
              }}
            />
          </ul>
        </div>
      </div>
    </section>
  )
}
