import { useSelector } from 'react-redux'
import { Button, LinkButton } from '../Buttons'
import { FollowIcon } from '../Icons'
import JobCategoryIcon from '../../assets/icons/job-category.svg'
import JobTypeIcon from '../../assets/icons/job-type.svg'
import SalaryIcon from '../../assets/icons/salary.svg'

import { JobPost } from '../../features/jobs/type'
import { getJobs } from '../../features/jobs/jobsSlice'

interface JobCardProps {
  job: JobPost
}

export const JobCard = (props: JobCardProps) => {
  const { id, title, company, category, type, salaryRange } = props.job
  const jobs = useSelector(getJobs)

  const minSalaryRange = salaryRange.min / 1000
  const maxSalaryRange = salaryRange.max / 1000

  return (
    <div className="Card">
      <figure className="Card__logo">
        <img src={company.logo} alt="Comapny logo" />
      </figure>
      <div className="Card__description">
        <p>
          <span>
            <img src={JobCategoryIcon} alt="" /> {category}
          </span>
        </p>
        <h3 className="Card__title">{title}</h3>
        <h4 className="Card__subtitle">{company.name}</h4>
        <div className="Card__caption">
          <p>
            <img src={JobTypeIcon} alt="" />
            <span>{type}</span>
          </p>
          <p>
            <img src={SalaryIcon} alt="" />
            <span>
              {minSalaryRange} - {maxSalaryRange}k
            </span>
          </p>
        </div>
      </div>
      <div className="Card__actions">
        <Button text="Follow" type="ghost" handleClick={() => {}}>
          <FollowIcon />
        </Button>
        {jobs.applications.find(item => item.jobId === id) ? (
          <Button type="disabled" handleClick={() => {}} text="Applied" />
        ) : (
          <LinkButton text="See more" type="secondary" to={`/jobs/${id}`} />
        )}
      </div>
    </div>
  )
}
