import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { initialState } from '../Home/initialState'

import './Applications.styles.scss'
import { JobInfo } from '../Jobs'
import { Job } from '../Jobs/type'
import { Button, LinkButton } from '../../Buttons'
import { FileInput, TextAreaInput } from '../../Inputs'

import { ArrowLeftIcon, SendIcon } from '../../Icons'
import { ApplicationCard } from '../../Cards'

export const Applications = () => {
  const { jobID } = useParams()

  const [job, setJob] = useState<Job>(initialState[0])

  useEffect(() => {
    const foundJob = initialState.find(job => job.id === jobID)
    if (foundJob) return setJob(foundJob)
  }, [])

  if (jobID)
    return (
      <div className="Applications">
        <LinkButton type="ghost" text="Back" to={`/jobs/${jobID}`}>
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

          <FileInput
            name="resume"
            label=""
            caption="Only PDF. Max size 5MB"
            accept=".pdf"
            maxSize={5}
            value={{ file: {}, path: '' }}
            handleChange={() => {}}
          />
          <TextAreaInput
            name="experience"
            label="Professional experience (taken from your profile)"
            placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
            caption="Between 300 and 2000 characters"
            value=""
            handleChange={() => {}}
          />
          <TextAreaInput
            name="interests"
            label="Why are you interested in working at The company name SA"
            placeholder="Mention things about The Company Name SA that excite you. Why would you be a good candidate?"
            caption="Between 50 and 1000 characters"
            value=""
            handleChange={() => {}}
          />
        </form>

        <div className="Jobs__callToAction">
          <Button type="primary" text="Send application" handleClick={() => {}}>
            <SendIcon />
          </Button>
        </div>
      </div>
    )

  return (
    <div className="Applications">
      <h1>Your applications</h1>
      <h3>4 applications found</h3>
      <ApplicationCard job={job} open />
    </div>
  )
}
