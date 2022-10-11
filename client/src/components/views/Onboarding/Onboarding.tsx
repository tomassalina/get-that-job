import { useState } from 'react'

import './Onboarding.styles.scss'
import { Professional } from './roles/Professional'
import { Recruiter } from './roles/Recruiter'

export const Onboarding = () => {
  const [isProfessional, setIsProfessional] = useState(true)

  return (
    <main className="Onboarding">
      <div className="wrapper">
        <div className="Onboarding__grid">
          <h2>Good choice!</h2>
          <h4>Create a new account as...</h4>
          <div className="Onboarding__buttons">
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
          {isProfessional ? <Professional /> : <Recruiter />}
        </div>
      </div>
    </main>
  )
}
