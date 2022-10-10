import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useFormik } from 'formik'
import useSteps from '../../../../hooks/useSteps'
import { Step, recruiterSteps } from '../steps'
import { Input, TextAreaInput, FileInput } from '../../../Inputs'
import { Button } from '../../../Buttons'

import { ArrowRightIcon } from '../../../Icons'

interface FormValues {
  role: 'recruiter'
  email: string
  companyName: string
  companyWebsite: string
  companyAbout: string
  companyLogo: { file: object; path: string }
}

export const Recruiter = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth0()
  const { steps, handleNext, handleSkip } = useSteps(recruiterSteps)

  const initialValues: FormValues = {
    role: 'recruiter',
    email: '',
    companyName: '',
    companyWebsite: '',
    companyAbout: '',
    companyLogo: { file: {}, path: '' },
  }

  const onSubmit = (values: FormValues) => {
    localStorage.setItem('user', JSON.stringify(values))
    navigate('/home')
  }

  const formik = useFormik({ initialValues, onSubmit })
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : {}
    const path = e.target.value
    setFieldValue('resume', { file, path })
  }

  useEffect(() => {
    if (user?.email) setFieldValue('email', user?.email)
  }, [user])

  return (
    <div className="Onboarding__steps">
      <ul>
        {steps.map((step, index) => (
          <Step key={index} data={{ ...step, index }} />
        ))}
      </ul>
      <div className="Onboarding__steps-form">
        {steps[0].active && (
          <form>
            <Input
              type="text"
              name="email"
              label="Email"
              placeholder="some.user@mail.com"
              value={values.email}
              handleChange={handleChange}
            />
            <div className="Onboarding__steps-buttons">
              <Button
                text="Next"
                type={isAuthenticated ? 'primary' : 'disabled'}
                handleClick={handleNext}
                iconRight
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
        )}
        {steps[1].active && (
          <form>
            <p className="Onboarding__steps-recommendation">
              You can complete this information later but we reccomend you to do
              it now
            </p>
            <Input
              type="text"
              name="companyName"
              label="Company name"
              placeholder="My Company S.A"
              value={values.companyName}
              handleChange={handleChange}
            />
            <Input
              type="url"
              name="companyWebsite"
              label="Company website"
              placeholder="https://www.mycompany.sa"
              value={values.companyWebsite}
              handleChange={handleChange}
            />
            <TextAreaInput
              name="companyAbout"
              label="About the company"
              placeholder="My Company SA has the vision to change thw way how..."
              caption="Between 100 and 2000 characters"
              value={values.companyAbout}
              handleChange={handleChange}
            />
            <FileInput
              name="companyLogo"
              label="Upload the company logo"
              caption="Only PDF. Max size 5MB"
              accept=".pdf"
              maxSize={5}
              value={values.companyLogo}
              handleChange={handleFileChange}
            />
            <div className="Onboarding__steps-buttons">
              <Button
                text="Skip this!"
                type="secondary"
                handleClick={handleSkip}
              />
              <Button
                text="Finish"
                type="primary"
                handleClick={handleSubmit}
                iconRight
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
