import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import useSteps from '../../../../hooks/useSteps'
import { Step, recruiterSteps } from '../steps'
import { StepForm } from '../steps'

import { LoginInformation, CompanyInformation } from '../information'

export interface FormValues {
  role: 'recruiter'
  email: string
  companyName: string
  companyWebsite: string
  companyAbout: string
  companyLogo: { file: object; path: string }
}

export type CompanyFormValues = Omit<FormValues, 'role' | 'email'>

export const Recruiter = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth0()
  const { steps, toNextStep, skipStep } = useSteps(recruiterSteps)
  const [recruiter, setRecruiter] = useState<FormValues>({
    role: 'recruiter',
    email: '',
    companyName: '',
    companyAbout: '',
    companyWebsite: '',
    companyLogo: { file: {}, path: '' },
  })

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(recruiter))
  }, [recruiter])

  return (
    <div className="Onboarding__steps">
      <ul>
        {steps.map((step, index) => (
          <Step key={index} data={{ ...step, index }} />
        ))}
      </ul>
      <div className="Onboarding__steps-form">
        {steps[0].active && (
          <StepForm>
            <LoginInformation
              email={user?.email ? user.email : ''}
              isAuthenticated={isAuthenticated}
              onNext={email => {
                setRecruiter(prevRecruiter => ({ ...prevRecruiter, email }))
                toNextStep()
              }}
            />
          </StepForm>
        )}
        {steps[1].active && (
          <StepForm>
            <CompanyInformation
              onSkip={values => {
                skipStep()
                setRecruiter(prevRecruiter => ({ ...prevRecruiter, ...values }))
                navigate('/home')
              }}
              onFinish={values => {
                setRecruiter(prevRecruiter => ({ ...prevRecruiter, ...values }))
                navigate('/home')
              }}
            />
          </StepForm>
        )}
      </div>
    </div>
  )
}
