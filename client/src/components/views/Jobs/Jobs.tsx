import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { JobInfo } from './JobInfo'
import { LinkButton } from '../../Buttons'

import './Jobs.styles.scss'
import { ApplyIcon, ArrowLeftIcon } from '../../Icons'
import { getJobs } from '../../../features/jobs/jobsSlice'
import { JobPost } from '../../../features/jobs/type'

export const Jobs = () => {
  const { jobID } = useParams()
  const jobs = useSelector(getJobs)

  const [job, setJob] = useState<JobPost>(jobs.list[0])

  useEffect(() => {
    const foundJob = jobs.list.find(job => job.id === jobID)
    if (foundJob) return setJob(foundJob)
  }, [])

  const requirements = job.requirements.split('-')
  const optionalRequirements = job.optionalRequirements.split('-')

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
          <p>{job.company.about}</p>
        </section>
        <section className="Jobs__section">
          <h2 className="Jobs__section-title">About the job position</h2>
          <p>{job.aboutPosition}</p>
        </section>
        <section className="Jobs__section">
          <h2 className="Jobs__section-title">Mandatory Requirements</h2>
          <p>
            {requirements.map(
              line =>
                line && (
                  <>
                    - {line}
                    <br />
                  </>
                )
            )}
          </p>
        </section>
        <section className="Jobs__section">
          <h2 className="Jobs__section-title">Optional Requirements</h2>
          <p>
            {optionalRequirements.map(
              line =>
                line && (
                  <>
                    - {line}
                    <br />
                  </>
                )
            )}
          </p>
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
