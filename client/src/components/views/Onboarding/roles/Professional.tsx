import { useAuth0 } from '@auth0/auth0-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import useSteps from '../../../../hooks/useSteps'
import { Step, professionalSteps } from '../steps'
import { Button } from '../../../Buttons'
import { Input, TextAreaInput, FileInput } from '../../../Inputs'
import { ArrowRightIcon, ArrowLeftIcon } from '../../../Icons'
import React, { useEffect } from 'react'

interface FormValues {
  email: string
  name: string
  phone: string
  birthdate: string
  linkedinUrl: string
  title: string
  experience: string
  education: string
  resume: { file: object; path: string }
}

export const Professional = () => {
  const { user, isAuthenticated } = useAuth0()
  const { steps, handleNext, handlePrevious, handleSkip } =
    useSteps(professionalSteps)

  const initialValues: FormValues = {
    email: '',
    name: '',
    phone: '',
    birthdate: '',
    linkedinUrl: '',
    title: '',
    experience: '',
    education: '',
    resume: { file: {}, path: '' },
  }

  const onSubmit = (values: FormValues) => {
    console.log(values)
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
              name="name"
              label="Name"
              placeholder="John Doe"
              value={values.name}
              handleChange={handleChange}
            />
            <Input
              type="tel"
              name="phone"
              label="Phone"
              caption="+[country code][number]"
              placeholder="+XXXXXXXXX"
              value={values.phone}
              handleChange={handleChange}
            />
            <Input
              type="date"
              name="birthdate"
              label="Birthdate"
              placeholder="Pick a date"
              value={values.birthdate}
              handleChange={handleChange}
            />
            <Input
              type="url"
              name="linkedinUrl"
              label="LinkedIn URL"
              placeholder="https://www.linkedin.com/in/username"
              value={values.linkedinUrl}
              handleChange={handleChange}
            />
            <div className="Onboarding__steps-buttons">
              <Button
                text="Skip this!"
                type="secondary"
                handleClick={handleSkip}
              />
              <Button
                text="Next"
                type="primary"
                handleClick={handleNext}
                iconRight
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
        )}

        {steps[2].active && (
          <form>
            <p className="Onboarding__steps-recommendation">
              You can complete this information later but we reccomend you to do
              it now
            </p>
            <Input
              type="text"
              name="title"
              label="Title"
              placeholder="UX/UI designer"
              value={values.title}
              handleChange={handleChange}
            />
            <TextAreaInput
              name="experience"
              label="Professional Experience"
              placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
              caption="Between 300 and 2000 characters"
              value={values.experience}
              handleChange={handleChange}
            />
            <TextAreaInput
              name="education"
              label="Education"
              placeholder="Major in life experiences with a PHD in procrastination..."
              caption="Between 100 and 2000 characters"
              value={values.education}
              handleChange={handleChange}
            />
            <FileInput
              name="resume"
              label="Upload/Update your CV"
              caption="Only PDF. Max size 5MB"
              accept=".pdf"
              maxSize={5}
              value={values.resume}
              handleChange={handleFileChange}
            />

            <div className="Onboarding__steps-buttons">
              <Button
                text="Previous"
                type="primary"
                handleClick={handlePrevious}
              >
                <ArrowLeftIcon />
              </Button>
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
