import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Input, FileInput, TextAreaInput } from '../../../Inputs'
import { Button } from '../../../Buttons'

import { CompanyInformationValues } from './type'
import { ArrowRightIcon } from '../../../Icons'

export const CompanyInformation = (props: {
  initialValues: CompanyInformationValues
  onSkip: () => void
  onFinish: (values: CompanyInformationValues) => void
}) => {
  const { onSkip, onFinish } = props

  const initialValues: CompanyInformationValues = {
    companyName: '',
    companyWebsite: '',
    companyAbout: '',
    companyLogo: { file: {}, path: '' },
  }

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().min(3).required(required),
    companyWebsite: Yup.string().url('must be a valid URL').required(required),
    companyAbout: Yup.string().min(100).max(2000).required(required),
  })

  const onSubmit = (values: CompanyInformationValues) => {
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
        name="companyName"
        label="Company name"
        placeholder="My Company S.A"
        value={values.companyName}
        handleChange={handleChange}
        error={errors.companyName}
        touched={touched.companyName}
        handleBlur={handleBlur}
      />
      <Input
        type="url"
        name="companyWebsite"
        label="Company website"
        placeholder="https://www.mycompany.sa"
        value={values.companyWebsite}
        handleChange={handleChange}
        error={errors.companyWebsite}
        touched={touched.companyWebsite}
        handleBlur={handleBlur}
      />
      <TextAreaInput
        name="companyAbout"
        label="About the company"
        placeholder="My Company SA has the vision to change thw way how..."
        caption="Between 100 and 2000 characters"
        value={values.companyAbout}
        handleChange={handleChange}
        error={errors.companyAbout}
        touched={touched.companyAbout}
        handleBlur={handleBlur}
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
