import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Input, FileInput, TextAreaInput } from '../../../Inputs'
import { Button } from '../../../Buttons'

import { CompanyInfoValues } from '../../../../features/user/type'
import { ArrowRightIcon } from '../../../Icons'

export const CompanyInformation = (props: {
  initialValues: CompanyInfoValues
  onSkip: () => void
  onFinish: (values: CompanyInfoValues) => void
}) => {
  const { onSkip, onFinish, initialValues } = props

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required(required),
    website: Yup.string().url('must be a valid URL').required(required),
    about: Yup.string().min(100).max(2000).required(required),
  })

  const onSubmit = (values: CompanyInfoValues) => {
    onFinish(values)
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    isValid,
  } = formik

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : {}
    const path = e.target.value
    setFieldValue('resume', { file, path })
  }

  return (
    <>
      <p className="Onboarding__steps-recommendation">
        You can complete this information later but we reccomend you to do it
        now
      </p>
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
      <FileInput
        name="logo"
        label="Upload the company logo"
        caption="PNG, JPEG, SVG"
        accept=".png,.svg,.jpeg,.jpg"
        maxSize={5}
        value={values.logo}
        handleChange={handleFileChange}
      />
      <div className="Onboarding__steps-buttons">
        <Button
          text="Skip this!"
          type={isValid ? 'disabled' : 'secondary'}
          handleClick={() => onSkip()}
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
    </>
  )
}
