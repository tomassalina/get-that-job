import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import {
  createUser,
  setLoginfo,
  setPersonalInfo,
  setProfessionalInfo,
  getUser,
} from '../../../../features/user/userSlice'
import {
  LoginInfoValues,
  PersonalInfoValues,
  ProfessionalInfoValues,
} from '../../../../features/user/type'

import useSteps from '../../../../hooks/useSteps'
import { professionalSteps, StepForm, Step } from '../steps'
import {
  LoginInformation,
  PersonalInformation,
  ProfessionalInformation,
} from '../information'

export const Professional = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { name, professional } = useSelector(getUser)
  const { user: auth0User, isAuthenticated } = useAuth0()
  const { steps, toNextStep, toPreviousStep, skipStep } =
    useSteps(professionalSteps)

  // _____HANDLERS:
  const handleLogin = (email: LoginInfoValues['email']) => {
    dispatch(setLoginfo({ email, role: 'professional' }))
    toNextStep()
  }

  const handlePersonalInfo = (values: PersonalInfoValues) => {
    dispatch(setPersonalInfo(values))
    toNextStep()
  }

  const handleSkipAndRedirect = () => {
    dispatch(createUser())
    // navigate('/home')
  }

  const handleFinish = (values: ProfessionalInfoValues) => {
    dispatch(setProfessionalInfo({ ...professional, ...values }))
    dispatch(createUser())
    // navigate('/home')
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
            <PersonalInformation
              initialValues={{
                name,
                phone: professional.phone,
                birthdate: professional.birthdate,
                linkedinUrl: professional.linkedinUrl,
              }}
              onNext={handlePersonalInfo}
              onSkip={skipStep}
            />
          </StepForm>
        )}

        {steps[2].active && (
          <StepForm>
            <ProfessionalInformation
              initialValues={{
                title: professional.title,
                experience: professional.experience,
                education: professional.education,
                resume: professional.resume,
              }}
              onPrevious={toPreviousStep}
              onSkip={handleSkipAndRedirect}
              onFinish={handleFinish}
            />
          </StepForm>
        )}
      </div>
    </div>
  )
}
