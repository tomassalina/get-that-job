import Avatar1 from '../../../../assets/avatar-1.png'
import Avatar2 from '../../../../assets/avatar-2.png'
import { TeamMember } from './TeamMember'

export const TeamSection = () => {
  return (
    <section className="Team">
      <div className="wrapper">
        <div className="Team__grid">
          <h3>Meet the team</h3>
          <ul className="Team__list">
            <TeamMember
              name="Marcos Laurens"
              avatar={Avatar1}
              social={{
                github: 'https://github.com/Marquisl2/',
                linkedin: 'https://www.linkedin.com/in/marcos-laurens/',
              }}
            />
            <TeamMember
              name="Tomas Salina"
              avatar={Avatar2}
              social={{
                github: 'https://github.com/salinatomass/',
                linkedin: 'https://www.linkedin.com/in/salinatomass/',
              }}
            />
            <TeamMember
              name="Ivan Cataldo"
              avatar={Avatar1}
              social={{
                github: 'https://github.com/cataldoIvan/',
                linkedin: 'https://www.linkedin.com/in/cataldoivan/',
              }}
            />
          </ul>
        </div>
      </div>
    </section>
  )
}
