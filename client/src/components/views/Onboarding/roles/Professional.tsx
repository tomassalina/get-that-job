import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import useSteps from '../../../../hooks/useSteps'
import { professionalSteps, StepForm, Step } from '../steps'
import {
  LoginInformation,
  PersonalInformation,
  ProfessionalInformation,
} from '../information'

import { initialState } from './initialState'
import { ProfessionalForm } from './type'
import {
  LoginInformationValues,
  PersonalInformationValues,
  ProfessionalInformationValues,
} from '../information/type'

export const Professional = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth0()
  const { steps, toNextStep, toPreviousStep, skipStep } =
    useSteps(professionalSteps)

  const [redirect, setRedirect] = useState<string>('')
  const [professional, setProfessional] = useState<ProfessionalForm>(
    initialState.professionalForm
  )

  const initialPersonalValues = {
    name: professional.name,
    phone: professional.phone,
    birthdate: professional.birthdate,
    linkedinUrl: professional.linkedinUrl,
  }

  const initialProfessionalValues = {
    title: professional.title,
    experience: professional.experience,
    education: professional.education,
    resume: professional.resume,
  }

  const handleLogin = (email: LoginInformationValues['email']) => {
    setProfessional(prevProfessional => ({ ...prevProfessional, email }))
    toNextStep()
  }

  const handleNext = (values: PersonalInformationValues) => {
    setProfessional(prevProfessional => ({
      ...prevProfessional,
      ...values,
    }))
    toNextStep()
  }

  const handleSkip = () => {
    setProfessional(prevProfessional => ({
      ...prevProfessional,
      name: initialState.professionalForm.name,
      phone: initialState.professionalForm.phone,
      birthdate: initialState.professionalForm.birthdate,
      linkedinUrl: initialState.professionalForm.linkedinUrl,
    }))
    skipStep()
  }

  const handlePrevious = (values: ProfessionalInformationValues) => {
    setProfessional(prevProfessional => ({
      ...prevProfessional,
      ...values,
      resume: initialState.professionalForm.resume,
    }))
    toPreviousStep()
  }

  const handleSkipAndRedirect = () => {
    setProfessional(prevProfessional => ({
      ...prevProfessional,
      title: initialState.professionalForm.title,
      experience: initialState.professionalForm.experience,
      education: initialState.professionalForm.education,
      resume: initialState.professionalForm.resume,
    }))
    setRedirect('/home')
  }

  const handleFinish = (values: ProfessionalInformationValues) => {
    setProfessional(prevProfessional => ({
      ...prevProfessional,
      ...values,
    }))
    setRedirect('/home')
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(professional))
    if (redirect) navigate(redirect)
  }, [professional])

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
            <PersonalInformation
              initialValues={initialPersonalValues}
              onNext={handleNext}
              onSkip={handleSkip}
            />
          </StepForm>
        )}

        {steps[2].active && (
          <StepForm>
            <ProfessionalInformation
              initialValues={initialProfessionalValues}
              onPrevious={handlePrevious}
              onSkip={handleSkipAndRedirect}
              onFinish={handleFinish}
            />
          </StepForm>
        )}
      </div>
    </div>
  )
}
