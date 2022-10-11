import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import useSteps from '../../../../hooks/useSteps'
import { recruiterSteps, Step, StepForm } from '../steps'
import { LoginInformation, CompanyInformation } from '../information'

import { initialState } from './initialState'
import { RecruiterForm } from './type'
import {
  LoginInformationValues,
  CompanyInformationValues,
} from '../information/type'

export const Recruiter = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth0()
  const { steps, toNextStep } = useSteps(recruiterSteps)

  const [redirect, setRedirect] = useState<string>('')
  const [recruiter, setRecruiter] = useState<RecruiterForm>(
    initialState.recruiterForm
  )

  const initialCompanyValues = {
    companyName: recruiter.companyName,
    companyAbout: recruiter.companyAbout,
    companyWebsite: recruiter.companyWebsite,
    companyLogo: recruiter.companyLogo,
  }

  const handleLogin = (email: LoginInformationValues['email']) => {
    setRecruiter(prevRecruiter => ({ ...prevRecruiter, email }))
    toNextStep()
  }

  const handleSkipAndRedirect = () => {
    setRecruiter(prevRecruiter => ({
      ...prevRecruiter,
      ...initialCompanyValues,
    }))
    setRedirect('/home')
  }

  const handleFinish = (values: CompanyInformationValues) => {
    setRecruiter(prevRecruiter => ({ ...prevRecruiter, ...values }))
    setRedirect('/home')
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(recruiter))
    if (redirect) navigate(redirect)
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
              onNext={handleLogin}
            />
          </StepForm>
        )}
        {steps[1].active && (
          <StepForm>
            <CompanyInformation
              initialValues={initialCompanyValues}
              onSkip={handleSkipAndRedirect}
              onFinish={handleFinish}
            />
          </StepForm>
        )}
      </div>
    </div>
  )
}
