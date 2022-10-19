import './Status.styles.scss'
import MailIcon from '../../assets/icons/mail.svg'
import PauseIcon from '../../assets/icons/pause.svg'
import MailCheckedIcon from '../../assets/icons/mail-checked.svg'
import ReviewCheckedIcon from '../../assets/icons/review-checked.svg'
import CloseIcon from '../../assets/icons/close.svg'

const Posted = ({ on }: { on: string }) => {
  return (
    <div className="Status">
      <img className="Status__icon" src={MailIcon} alt="mail icon" />
      <p className="Status__text">
        Posted <br /> {on}
      </p>
    </div>
  )
}
const Waiting = () => {
  return (
    <div className="Status waiting">
      <img className="Status__icon" src={PauseIcon} alt="pause icon" />
      <p className="Status__text">Waiting for review</p>
    </div>
  )
}

const InProgress = () => {
  return (
    <div className="Status">
      <img
        className="Status__icon"
        src={MailCheckedIcon}
        alt="checked mail icon"
      />
      <p className="Status__text">Review started</p>
    </div>
  )
}

const Finished = () => {
  return (
    <div className="Status">
      <img
        className="Status__icon"
        src={ReviewCheckedIcon}
        alt="checked reivew icon"
      />
      <p className="Status__description">Review finished</p>
    </div>
  )
}

const Declined = ({ on }: { on: string }) => {
  return (
    <div className="Status declined">
      <img className="Status__icon" src={CloseIcon} alt="close icon" />
      <p className="Status__description">Declined on {on}</p>
    </div>
  )
}

export const ApplicationStatus = {
  Posted,
  Waiting,
  InProgress,
  Finished,
  Declined,
}
