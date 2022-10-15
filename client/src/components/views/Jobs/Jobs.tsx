import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Job } from './type'
import { initialState } from '../Home/initialState'
import { Button, LinkButton } from '../../Buttons'
import { DisplayCard } from '../../Cards'

import './Jobs.styles.scss'
import { ApplyIcon, ArrowLeftIcon, FollowIcon } from '../../Icons'
import CategoryIcon from '../../../assets/icons/job-category.svg'
import TypeIcon from '../../../assets/icons/job-type.svg'
import SalaryIcon from '../../../assets/icons/salary.svg'
import ClockIcon from '../../../assets/icons/clock.svg'

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
      <div className="Jobs__header">
        <div className="Jobs__company">
          <figure>
            <img src={job.companyLogo} alt="" />
          </figure>
          <h3>{job.companyName}</h3>
          <Button type="ghost" text="Following" handleClick={() => {}}>
            <FollowIcon />
          </Button>
        </div>
        <div className="Jobs__apply">
          <Button type="primary" text="Apply now" handleClick={() => {}}>
            <ApplyIcon />
          </Button>
        </div>
      </div>
      <h1 className="Jobs__title">{job.title}</h1>
      <div className="Jobs__date">
        <img src={ClockIcon} alt="clock icon" />
        <h4>Posted 2 day ago</h4>
      </div>
      <ul className="Jobs__displays">
        <DisplayCard type="Category" title={job.category} logo={CategoryIcon} />
        <DisplayCard type="Type" title={job.type} logo={TypeIcon} />
        <DisplayCard
          type="Salary"
          title={`${job.salaryRange.min} - ${job.salaryRange.max}`}
          logo={SalaryIcon}
        />
      </ul>
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
      <div className="Jobs__apply">
        <Button type="primary" text="Apply now" handleClick={() => {}}>
          <ApplyIcon />
        </Button>
      </div>
    </div>
  )
}
