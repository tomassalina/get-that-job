import OpenedMailIcon from '../../assets/icons/mail-opened.svg'
import ProfileIcon from '../../assets/icons/profile.svg'
import ProfilePinkIcon from '../../assets/icons/profile-pink.svg'
import CloseIcon from '../../assets/icons/close.svg'

const Open = ({ on }: { on: string }) => {
  return (
    <div className="Status">
      <img className="Status__icon" src={OpenedMailIcon} alt="mail icon" />
      <p className="Status__text">
        Open on <br /> {on}
      </p>
    </div>
  )
}

const Total = ({ applicants }: { applicants: number }) => {
  return (
    <div className="Status">
      <img className="Status__icon" src={ProfileIcon} alt="mail icon" />
      <span>{applicants}</span>
      <p className="Status__text">Total applicants</p>
    </div>
  )
}

const InProgress = ({ candidates }: { candidates: number }) => {
  return (
    <div className="Status waiting">
      <img className="Status__icon" src={ProfilePinkIcon} alt="mail icon" />
      <span>{candidates}</span>
      <p className="Status__text">Candidates on track</p>
    </div>
  )
}

const Close = ({ on }: { on: string }) => {
  return (
    <div className="Status declined">
      <img className="Status__icon" src={CloseIcon} alt="close icon" />
      <p className="Status__description">Close on {on}</p>
    </div>
  )
}

export const JobStatus = {
  Open,
  Total,
  InProgress,
  Close,
}
