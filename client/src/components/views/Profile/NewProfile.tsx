import { useState } from 'react'

import './NewProfile.styles.scss'
import { NewProfessional } from './roles/NewProfessional'
import { NewRecruiter } from './roles/NewRecruiter'

export const NewProfile = () => {
  const [isProfessional, setIsProfessional] = useState(true)

  return (
    <main className="NewProfile">
      <div className="wrapper">
        <div className="NewProfile__grid">
          <h2>Good choice!</h2>
          <h4>Create a new account as...</h4>
          <div className="NewProfile__buttons">
            <button
              className={isProfessional ? 'active' : undefined}
              type="button"
              onClick={() => setIsProfessional(true)}
            >
              Professional
            </button>
            <button
              className={!isProfessional ? 'active' : undefined}
              type="button"
              onClick={() => setIsProfessional(false)}
            >
              Recruiter
            </button>
          </div>
          {isProfessional ? <NewProfessional /> : <NewRecruiter />}
        </div>
      </div>
    </main>
  )
}
