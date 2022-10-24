import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Input } from '../../../Inputs'
import { Button } from '../../../Buttons'

import { PersonalInfoValues } from '../../../../features/user/type'
import { ArrowRightIcon } from '../../../Icons'

export const PersonalInformation = (props: {
  initialValues: PersonalInfoValues
  onSkip: () => void
  onNext: (values: PersonalInfoValues) => void
}) => {
  const { initialValues, onSkip, onNext } = props

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required(required),
    phone: Yup.string()
      .test({
        test(value, ctx) {
          const message = 'phone missing correct prefix +'
          if (!value?.startsWith('+')) return ctx.createError({ message })
          return true
        },
      })
      .required(required),
    birthdate: Yup.date().required(required),
    linkedinUrl: Yup.string().url('must be a valid URL').required(required),
  })

  const onSubmit = (values: PersonalInfoValues) => onNext(values)

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
  } = formik

  return (
    <>
      <p className="Onboarding__steps-recommendation">
        You can complete this information later but we reccomend you to do it
        now
      </p>
      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="John Doe"
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
      <div className="Onboarding__steps-buttons">
        <Button
          text="Skip this!"
          type={isValid ? 'disabled' : 'secondary'}
          handleClick={onSkip}
        />
        <Button text="Next" type="primary" handleClick={handleSubmit} iconRight>
          <ArrowRightIcon />
        </Button>
      </div>
    </>
  )
}
