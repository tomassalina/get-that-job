import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { CreateJobPost } from '../../../features/jobs/type'
import { getUser } from '../../../features/user/userSlice'
import { Button } from '../../Buttons'
import { Input, TextAreaInput, RangeInput } from '../../Inputs'

import './CreateNewJob.styles.scss'
import AlkemyLogo from '../../../assets/logos/alkemy.svg'
import { useEffect } from 'react'
import { createJob } from '../../../features/jobs/jobsSlice'
import toast, { Toaster } from 'react-hot-toast'

export const CreateNewJob = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  const initialValues: CreateJobPost = {
    title: '',
    category: 'software and technology',
    type: 'full time',
    salaryRangeMin: 700,
    salaryRangeMax: 1000,
    status: 'waiting',
    aboutPosition: '',
    requirements: '',
    optionalRequirements: '',
    company: {
      id: user.id,
      name: user.name,
      about: user.company.about,
      logo: AlkemyLogo,
    },
  }

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    title: Yup.string().min(4).max(50).required(required),
    category: Yup.string().required(required),
    type: Yup.string().required(required),
    aboutPosition: Yup.string().min(100).required(required),
    requirements: Yup.string().required(required),
    optionalRequirements: Yup.string().required(required),
  })

  const onSubmit = (values: CreateJobPost) => {
    dispatch(createJob(values))
    toast.success('Job created successfully')
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
  } = formik

  useEffect(() => {
    setValues({ ...initialValues })
  }, [user])

  return (
    <div className="CreateNewJob">
      <h1 className="CreateNewJob__title">Create new job posting</h1>
      <section className="CreateNewJob__section">
        <h2 className="CreateNewJob__subtitle">Main information</h2>
        <form>
          <Input
            type="text"
            placeholder="Software engineer"
            label="Job Title"
            name="title"
            value={values.title}
            handleChange={handleChange}
            error={errors.title}
            touched={touched.title}
            handleBlur={handleBlur}
          />
          <Input
            type="text"
            name="category"
            placeholder="Select or create a category"
            label="Job Category"
            value={values.category}
            handleChange={handleChange}
            error={errors.category}
            touched={touched.category}
            handleBlur={handleBlur}
          />
          <Input
            type="text"
            name="type"
            placeholder="Select a type"
            label="Type"
            value={values.type}
            handleChange={handleChange}
            error={errors.type}
            touched={touched.type}
            handleBlur={handleBlur}
          />
          <RangeInput
            label="Salary range"
            values={{ min: values.salaryRangeMin, max: values.salaryRangeMax }}
            handleChangeMin={handleChange}
            handleChangeMax={handleChange}
          />
        </form>
      </section>
      <section className="CreateNewJob__section">
        <h2 className="CreateNewJob__subtitle">Addtional information</h2>
        <form>
          <TextAreaInput
            name="aboutPosition"
            placeholder="Describe the main functions and characteristics of your job position"
            label="About the job position"
            value={values.aboutPosition}
            handleChange={handleChange}
            error={errors.aboutPosition}
            touched={touched.aboutPosition}
            handleBlur={handleBlur}
          />
          <TextAreaInput
            name="requirements"
            placeholder="List each mandatory requirement in a new line"
            label="Mandatory Requirements"
            value={values.requirements}
            handleChange={handleChange}
            error={errors.requirements}
            touched={touched.requirements}
            handleBlur={handleBlur}
          />
          <TextAreaInput
            name="optionalRequirements"
            placeholder="List each optional requirement in a new line"
            label="Optional Requirements"
            value={values.optionalRequirements}
            handleChange={handleChange}
            error={errors.optionalRequirements}
            touched={touched.optionalRequirements}
            handleBlur={handleBlur}
          />
          <Button
            type="primary"
            large={false}
            text="post this job"
            handleClick={handleSubmit}
          />
          <Toaster />
        </form>
      </section>
    </div>
  )
}
