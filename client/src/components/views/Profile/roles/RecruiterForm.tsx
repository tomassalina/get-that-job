import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'

import {
  getUser,
  saveUser,
  updateRecruiterUser,
} from '../../../../features/user/userSlice'

import {
  CompanyInfoValues,
  LoginInfoValues,
} from '../../../../features/user/type'
import { Button } from '../../../Buttons'
import { Input, TextAreaInput, FileInput } from '../../../Inputs'
import { useEffect } from 'react'

type FormValues = LoginInfoValues & CompanyInfoValues

export const RecruiterForm = () => {
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  const initialValues: FormValues = {
    email: user.email,
    role: user.role,
    name: user.name,
    website: user.company.website,
    about: user.company.about,
    logo: user.company.logo,
  }

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required(required),
    website: Yup.string().url('must be a valid URL'),
    about: Yup.string().min(100).max(2000),
  })

  const onSubmit = (values: FormValues) => {
    dispatch(updateRecruiterUser(values))
    dispatch(saveUser())
    toast.success('Profile updated')
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
    setFieldValue('logo', { file, path })
  }

  useEffect(() => {
    setValues({ ...initialValues })
  }, [user])

  return (
    <div className="Profile">
      <h1 className="Profile__title">Profile</h1>

      <form>
        <FileInput
          name="logo"
          label="Company logo"
          caption="PNG, JPEG, SVG"
          accept=".png,.svg,.jpeg,.jpg"
          maxSize={5}
          value={values.logo}
          handleChange={handleFileChange}
        />
        <Input
          type="text"
          name="name"
          label="Company name"
          placeholder="My Company S.A"
          value={values.name}
          handleChange={handleChange}
          error={errors.name}
          touched={touched.name}
          handleBlur={handleBlur}
        />
        <Input
          type="url"
          name="website"
          label="Company website"
          placeholder="https://www.mycompany.sa"
          value={values.website}
          handleChange={handleChange}
          error={errors.website}
          touched={touched.website}
          handleBlur={handleBlur}
        />
        <TextAreaInput
          name="about"
          label="About the company"
          placeholder="My Company SA has the vision to change thw way how..."
          caption="Between 100 and 2000 characters"
          value={values.about}
          handleChange={handleChange}
          error={errors.about}
          touched={touched.about}
          handleBlur={handleBlur}
        />

        <Button
          type="primary"
          text="Update profile"
          handleClick={handleSubmit}
        />
        <Toaster />
      </form>
    </div>
  )
}
