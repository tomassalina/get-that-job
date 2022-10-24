import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import './Applications.styles.scss'
import { JobInfo } from '../Jobs'
import { Button, LinkButton } from '../../Buttons'
import { FileInput, TextAreaInput } from '../../Inputs'

import { ArrowLeftIcon, SendIcon } from '../../Icons'
import { ApplicationCard } from '../../Cards'
import { getJobs, sendApplication } from '../../../features/jobs/jobsSlice'
import { JobPost } from '../../../features/jobs/type'
import { getUser } from '../../../features/user/userSlice'

export const Applications = () => {
  const { jobID: jobId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const jobs = useSelector(getJobs)

  const [job, setJob] = useState<JobPost>(jobs.list[0])

  const initialValues = {
    jobId,
    user,
    experience: user.professional.experience,
    interests: '',
  }

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    experience: Yup.string().min(300).max(2000).required(required),
    interests: Yup.string().min(50).max(1000).required(required),
  })

  const onSubmit = (values: any) => {
    dispatch(sendApplication(values))
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
    const foundJob = jobs.list.find(job => job.id === jobId)
    if (foundJob) return setJob(foundJob)

    setValues({ ...initialValues })
  }, [user])

  if (jobId)
    return (
      <div className="Applications">
        <LinkButton type="ghost" text="Back" to={`/jobs/${jobId}`}>
          <ArrowLeftIcon />
        </LinkButton>

        <JobInfo
          job={job}
          callToAction={() => (
            <Button
              type="primary"
              text="Send application"
              handleClick={() => {}}
            >
              <SendIcon />
            </Button>
          )}
        />

        <form className="Applications__form">
          <h2 className="Applications__title">Complete yout application</h2>

          {/* <FileInput
            name="resume"
            label=""
            caption="Only PDF. Max size 5MB"
            accept=".pdf"
            maxSize={5}
            value={{ file: {}, path: '' }}
            handleChange={() => {}}
          /> */}
          <TextAreaInput
            name="experience"
            label="Professional experience (taken from your profile)"
            placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
            caption="Between 300 and 2000 characters"
            value={values.experience}
            handleChange={handleChange}
            error={errors.experience}
            touched={touched.experience}
            handleBlur={handleBlur}
          />
          <TextAreaInput
            name="interests"
            label="Why are you interested in working at The company name SA"
            placeholder="Mention things about The Company Name SA that excite you. Why would you be a good candidate?"
            caption="Between 50 and 1000 characters"
            value={values.interests}
            handleChange={handleChange}
            error={errors.interests}
            touched={touched.interests}
            handleBlur={handleBlur}
          />
        </form>

        <div className="Jobs__callToAction">
          <Button
            type="primary"
            text="Send application"
            handleClick={handleSubmit}
          >
            <SendIcon />
          </Button>
        </div>
      </div>
    )

  console.log(jobs.applications)

  return (
    <div className="Applications">
      <h1 className="Home__title">Your applications</h1>
      <h3 className="Home__subtitle">
        {jobs.applications.filter(job => job.user.id === user.id).length}{' '}
        applications found
      </h3>
      {jobs.applications
        .filter(job => job.user.id === user.id)
        .map(item => (
          <ApplicationCard application={item} />
        ))}
    </div>
  )
}
