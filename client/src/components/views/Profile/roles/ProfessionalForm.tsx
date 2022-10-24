import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getUser,
  updateProfessionalUser,
  saveUser,
} from '../../../../features/user/userSlice'
import { Button } from '../../../Buttons'
import { Input, TextAreaInput, FileInput } from '../../../Inputs'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  LoginInfoValues,
  PersonalInfoValues,
  ProfessionalInfoValues,
} from '../../../../features/user/type'

type FormValues = LoginInfoValues & PersonalInfoValues & ProfessionalInfoValues

export const ProfessionalForm = () => {
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  const initialValues: FormValues = {
    email: user.email,
    role: 'professional',
    name: user.name,
    phone: user.professional.phone,
    birthdate: user.professional.birthdate,
    linkedinUrl: user.professional.linkedinUrl,
    title: user.professional.title,
    experience: user.professional.experience,
    education: user.professional.education,
    resume: user.professional.resume,
  }

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required(required),
    phone: Yup.string().test({
      test(value, ctx) {
        const message = 'phone missing correct prefix +'
        if (!value?.startsWith('+')) return ctx.createError({ message })
        return true
      },
    }),
    birthdate: Yup.date(),
    linkedinUrl: Yup.string().url('must be a valid URL'),
    title: Yup.string().min(4).max(50),
    experience: Yup.string().min(300).max(2000),
    education: Yup.string().min(100).max(2000),
  })

  const onSubmit = (values: FormValues) => {
    dispatch(updateProfessionalUser(values))
    dispatch(saveUser())
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setValues,
    setFieldValue,
  } = formik

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : {}
    const path = e.target.value
    setFieldValue('resume', { file, path })
  }

  useEffect(() => {
    setValues({ ...initialValues })
  }, [user])

  return (
    <div className="Profile">
      <h1 className="Profile__title">Profile</h1>
      <div className="Profile__section">
        <h4 className="Profile__subtitle">Personal information</h4>
        <form>
          <Input
            type="text"
            name="email"
            label="Email"
            placeholder="some.user@mail.com"
            value={values.email}
            handleChange={() => {}}
          />
          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            label="Name"
            value={values.name}
            handleChange={handleChange}
            error={errors.name}
            touched={touched.name}
            handleBlur={handleBlur}
          />
          <Input
            type="tel"
            name="phone"
            label="Phone"
            caption="+[country code][number]"
            placeholder="+XXXXXXXXX"
            value={values.phone}
            handleChange={handleChange}
            error={errors.phone}
            touched={touched.phone}
            handleBlur={handleBlur}
          />
          <Input
            type="date"
            name="birthdate"
            label="Birthdate"
            placeholder="Pick a date"
            value={values.birthdate}
            handleChange={handleChange}
            error={errors.birthdate}
            touched={touched.birthdate}
            handleBlur={handleBlur}
          />
          <Input
            type="url"
            name="linkedinUrl"
            label="LinkedIn URL"
            placeholder="https://www.linkedin.com/in/username"
            value={values.linkedinUrl}
            handleChange={handleChange}
            error={errors.linkedinUrl}
            touched={touched.linkedinUrl}
            handleBlur={handleBlur}
          />
        </form>

        <div className="Profile__section">
          <h4 className="Profile__subtitle">Professional information</h4>
          <p>Changes made here will be reflected in your future applications</p>
          <form>
            <Input
              type="text"
              name="title"
              label="Title"
              placeholder="UX/UI designer"
              value={values.title}
              handleChange={handleChange}
              error={errors.title}
              touched={touched.title}
              handleBlur={handleBlur}
            />
            <TextAreaInput
              name="experience"
              label="Professional Experience"
              placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
              caption="Between 300 and 2000 characters"
              value={values.experience}
              handleChange={handleChange}
              error={errors.experience}
              touched={touched.experience}
              handleBlur={handleBlur}
            />
            <TextAreaInput
              name="education"
              label="Education"
              placeholder="Major in life experiences with a PHD in procrastination..."
              caption="Between 100 and 2000 characters"
              value={values.education}
              handleChange={handleChange}
              error={errors.education}
              touched={touched.education}
              handleBlur={handleBlur}
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

            <Button
              type="primary"
              text="Update profile"
              handleClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  )
}
