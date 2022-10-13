import { Button } from '../Buttons'
import { FollowingIcon } from '../Icons'
import JobCategoryIcon from '../../assets/icons/job-category.svg'
import JobTypeIcon from '../../assets/icons/job-type.svg'
import SalaryIcon from '../../assets/icons/salary.svg'
import CompanyLogo from '../../assets/logos/company-default.png'

export const JobCard = () => {
  return (
    <div className="Card">
      <figure className="Card__logo">
        <img src={CompanyLogo} alt="Comapny logo" />
      </figure>
      <div className="Card__description">
        <p>
          <span>
            <img src={JobCategoryIcon} alt="" /> Frontend developer
          </span>
        </p>
        <h3 className="Card__title">The job title</h3>
        <h4 className="Card__subtitle">The company name</h4>
        <div className="Card__caption">
          <p>
            <img src={JobTypeIcon} alt="" />
            <span>Full time</span>
          </p>
          <p>
            <img src={SalaryIcon} alt="" />
            <span>2.0k - 2.5k</span>
          </p>
        </div>
      </div>
      <div className="Card__actions">
        <Button text="Follow" type="ghost" handleClick={() => {}}>
          <FollowingIcon />
        </Button>
        <Button text="See more" type="secondary" handleClick={() => {}} />
      </div>
    </div>
  )
}
