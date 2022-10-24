import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Input, FileInput, TextAreaInput } from '../../../Inputs'
import { Button } from '../../../Buttons'

import { ProfessionalInformationValues } from './type'
import { ArrowRightIcon, ArrowLeftIcon } from '../../../Icons'

export const ProfessionalInformation = (props: {
  initialValues: ProfessionalInformationValues
  onPrevious: () => void
  onSkip: () => void
  onFinish: (values: ProfessionalInformationValues) => void
}) => {
  const { initialValues, onPrevious, onSkip, onFinish } = props

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    title: Yup.string().min(4).max(50).required(required),
    experience: Yup.string().min(300).max(2000).required(required),
    education: Yup.string().min(100).max(2000).required(required),
  })

  const onSubmit = (values: ProfessionalInformationValues) => onFinish(values)

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

      <div className="Onboarding__steps-buttons">
        <Button text="Previous" type="primary" handleClick={onPrevious}>
          <ArrowLeftIcon />
        </Button>
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
