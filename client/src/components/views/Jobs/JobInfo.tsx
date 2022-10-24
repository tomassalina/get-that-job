import { Button } from '../../Buttons'
import { DisplayCard } from '../../Cards'

import { FollowIcon, ApplyIcon } from '../../Icons'
import CategoryIcon from '../../../assets/icons/job-category.svg'
import TypeIcon from '../../../assets/icons/job-type.svg'
import SalaryIcon from '../../../assets/icons/salary.svg'
import ClockIcon from '../../../assets/icons/clock.svg'
import { JobPost } from '../../../features/jobs/type'

interface JobInfoProps {
  job: JobPost
  callToAction: () => JSX.Element
}

export const JobInfo = ({ job, callToAction }: JobInfoProps) => {
  return (
    <div className="JobInfo">
      <div className="Jobs__header">
        <div className="Jobs__company">
          <figure>
            <img src={job.company.logo} alt="" />
          </figure>
          <h3>{job.company.name}</h3>
          <Button type="ghost" text="Following" handleClick={() => {}}>
            <FollowIcon />
          </Button>
        </div>
        <div className="Jobs__callToAction">{callToAction()}</div>
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
    </div>
  )
}
