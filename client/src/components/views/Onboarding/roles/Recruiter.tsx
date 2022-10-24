import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import {
  saveUser,
  setLoginfo,
  setCompanyInfo,
  getUser,
} from '../../../../features/user/userSlice'
import {
  CompanyInfoValues,
  LoginInfoValues,
} from '../../../../features/user/type'

import useSteps from '../../../../hooks/useSteps'
import { recruiterSteps, Step, StepForm } from '../steps'
import { LoginInformation, CompanyInformation } from '../information'

export const Recruiter = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { company, name } = useSelector(getUser)
  const { user: auth0User, isAuthenticated } = useAuth0()
  const { steps, toNextStep } = useSteps(recruiterSteps)

  const initialCompanyValues: CompanyInfoValues = {
    name,
    about: company.about,
    website: company.website,
    logo: company.logo,
  }

  const handleLogin = (email: LoginInfoValues['email']) => {
    dispatch(setLoginfo({ email, role: 'recruiter' }))
    toNextStep()
  }

  const handleSkipAndRedirect = () => {
    dispatch(saveUser())
    navigate('/home')
  }

  const handleFinish = (values: CompanyInfoValues) => {
    dispatch(setCompanyInfo(values))
    dispatch(saveUser())
    navigate('/home')
  }

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
              email={auth0User?.email ? auth0User.email : ''}
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
