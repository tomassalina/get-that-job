import { useState } from 'react'
import classNames from 'classnames'

import { JobStatus as Status } from '../Status'

import JobCategoryIcon from '../../assets/icons/job-category.svg'
import JobTypeIcon from '../../assets/icons/job-type.svg'
import SalaryIcon from '../../assets/icons/salary.svg'
import { LinkButton, Button } from '../Buttons'
import { CloseIcon, FindIcon, ArrowBottomIcon } from '../Icons'
import { JobPost } from '../../features/jobs/type'

interface JobPostCardProps {
  jobPost: JobPost
  open?: boolean
}

export const JobPostCard = ({ jobPost, open }: JobPostCardProps) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const styles = classNames(['SwitchCard', { open: isOpen }])

  return (
    <div className={styles}>
      <div className="SwitchCard__header">
        <div className="SwitchCard__post">
          <h3 className="SwitchCard__title">{jobPost.title}</h3>
          <div className="SwitchCard__info">
            <p>
              <span>
                <img src={JobCategoryIcon} alt="" /> {jobPost.category}
              </span>
              <span>
                <img src={JobTypeIcon} alt="" /> {jobPost.type}
              </span>
              <span>
                <img src={SalaryIcon} alt="" />
                {`${jobPost.salaryRange.min} - ${jobPost.salaryRange.max}`}
              </span>
            </p>
          </div>
        </div>
        <div className="SwitchCard__statuses">
          <Status.Open on={jobPost.createdOn} />
          <Status.Total applicants={jobPost.applicants.length} />
          <Status.InProgress candidates={jobPost.applicants.length} />
        </div>
        <div className="SwitchCard__actions">
          <LinkButton type="ghost" text="Show" to="/posting">
            <FindIcon />
          </LinkButton>
          <Button text="close" type="primary" handleClick={() => {}}>
            <CloseIcon />
          </Button>
          <button className="openArrow" type="button" onClick={handleOpen}>
            <ArrowBottomIcon />
          </button>
        </div>
      </div>
      <div className="SwitchCard__content">
        <div className="SwitchCard__section">
          <h4>About the job position</h4>
          <p>{jobPost.aboutPosition}</p>
        </div>
        <div className="SwitchCard__section">
          <h4>Mandatory requirements</h4>
          <p>{jobPost.requirements}</p>
        </div>
        <div className="SwitchCard__section">
          <h4>Optional requirements</h4>
          <p>{jobPost.optionalRequirements}</p>
        </div>
      </div>
    </div>
  )
}
