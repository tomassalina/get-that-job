import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Job } from './type'

import { JobInfo } from './JobInfo'
import { initialState } from '../Home/initialState'
import { LinkButton } from '../../Buttons'

import './Jobs.styles.scss'
import { ApplyIcon, ArrowLeftIcon } from '../../Icons'

export const Jobs = () => {
  const { jobID } = useParams()

  const [job, setJob] = useState<Job>(initialState[0])

  useEffect(() => {
    const foundJob = initialState.find(job => job.id === jobID)
    if (foundJob) return setJob(foundJob)
  }, [])

  return (
    <div className="Jobs">
      <LinkButton type="ghost" text="Back" to="/home">
        <ArrowLeftIcon />
      </LinkButton>

      <JobInfo
        job={job}
        callToAction={() => (
          <LinkButton
            type="primary"
            text="Apply now"
            to={`/applications/${job.id}`}
          >
            <ApplyIcon />
          </LinkButton>
        )}
      />

      <main className="Jobs__main">
        <section className="Jobs__section">
          <h2 className="Jobs__section-title">About The company name SA</h2>
          <p>{job.aboutCompany}</p>
        </section>
        <section className="Jobs__section">
          <h2 className="Jobs__section-title">About the job position</h2>
          <p>{job.aboutPosition}</p>
        </section>
        <section className="Jobs__section">
          <h2 className="Jobs__section-title">Mandatory Requirements</h2>
          <p>{job.requirements}</p>
        </section>
        <section className="Jobs__section">
          <h2 className="Jobs__section-title">Optional Requirements</h2>
          <p>{job.optionalRequirements}</p>
        </section>
      </main>
      <div className="Jobs__callToAction">
        <LinkButton
          type="primary"
          text="Apply now"
          to={`/applications/${job.id}`}
        >
          <ApplyIcon />
        </LinkButton>
      </div>
    </div>
  )
}
