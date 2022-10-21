import classNames from 'classnames'
import { Job } from '../views/Jobs/type'

import { ApplicationStatus as Status } from '../Status'

import { ArrowBottomIcon, CloseIcon, DownloadIcon } from '../Icons'
import JobCategoryIcon from '../../assets/icons/job-category.svg'
import JobTypeIcon from '../../assets/icons/job-type.svg'
import SalaryIcon from '../../assets/icons/salary.svg'
import ClockIcon from '../../assets/icons/clock.svg'
import { useState } from 'react'
import { Button } from '../Buttons'

interface ApplicationCardProps {
  job: Job
  open?: boolean
}

export const ApplicationCard = ({ job, open }: ApplicationCardProps) => {
  const {
    companyLogo,
    title,
    companyName,
    category,
    type,
    salaryRange,
    createdOn,
    status,
  } = job

  const [isOpen, setIsOpen] = useState(open)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const renderStatus = () => {
    switch (status) {
      case 'waiting':
        return <Status.Waiting />
      case 'in progress':
        return <Status.InProgress />
      case 'finished':
        return <Status.Finished />
      case 'declined':
        return <Status.Declined on={createdOn} />
    }
  }

  const styles = classNames(['SwitchCard', { open: isOpen }])

  return (
    <div className={styles}>
      <div className="SwitchCard__header">
        <div className="SwitchCard__company">
          <img src={companyLogo} alt="" />
          <div className="SwitchCard__company--description">
            <h3 className="SwitchCard__title">{title}</h3>
            <h4 className="SwitchCard__subtitle">{companyName}</h4>
          </div>
        </div>
        <div className="SwitchCard__info">
          <p>
            <span>
              <img src={JobCategoryIcon} alt="" /> {category}
            </span>
            <span>
              <img src={JobTypeIcon} alt="" /> {type}
            </span>
          </p>
          <p>
            <span>
              <img src={SalaryIcon} alt="" />
              {`${salaryRange.min} - ${salaryRange.max}`}
            </span>
            <span>
              <img src={ClockIcon} alt="" /> Posted {createdOn}
            </span>
          </p>
        </div>
        <div className="SwitchCard__statuses">
          <Status.Posted on={createdOn} />
          {renderStatus()}
          <button className="openArrow" type="button" onClick={handleOpen}>
            <ArrowBottomIcon />
          </button>
        </div>
      </div>
      <div className="SwitchCard__content">
        <section className="SwitchCard__section">
          <h4>Professional experence</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
            quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a,
            tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in,
            ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus
            ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra
            porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan
            feugiat urna, eu hendrerit dui varius sit amet. Mauris eget
            tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum
            dolor eu posuere vehicula.
          </p>
          <p>
            Pellentesque ut mauris neque. Maecenas posuere sit amet erat at
            placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse potenti. Donec tempor lobortis nisl. Maecenas sit amet
            massa in tortor pulvinar sollicitudin. Fusce vitae feugiat felis, ut
            malesuada purus. Curabitur felis velit, interdum vitae viverra quis,
            sagittis ac nulla. Quisque tempus pharetra ornare. In sed nulla eget
            risus cursus facilisis vel quis nibh. Praesent euismod lectus a.
          </p>
        </section>
        <section className="SwitchCard__section">
          <h4>Why are you interested in working at {job.companyName}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            egestas ex at libero feugiat volutpat. Praesent fringilla
            scelerisque felis, ac elementum metus fringilla in. Maecenas et nibh
            fringilla, egestas arcu vel, tristique dui. Nulla quis suscipit
            erat, nec pretium arcu. Aenean blandit lacinia mauris, quis bibendum
            ante sagittis cursus. Pellentesque mattis ipsum et lorem euismod
            rutrum. Duis ullamcorper venenatis nisi, nec malesuada tellus
            tincidunt a. Maecenas suscipit odio sed justo accumsan iaculis.
            Quisque vitae erat ac felis tincidunt auctor vitae non est. Praesent
            vehicula feugiat faucibus.
          </p>
        </section>
      </div>
      <div className="SwitchCard__actions">
        <Button text="Download CV" type="secondary" handleClick={() => {}}>
          <DownloadIcon />
        </Button>
        <Button
          text="Decline Application"
          type="primary"
          handleClick={() => {}}
        >
          <CloseIcon />
        </Button>
      </div>
    </div>
  )
}
