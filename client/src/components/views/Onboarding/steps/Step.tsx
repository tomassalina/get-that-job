import classNames from 'classnames'

import { StepType } from './type'

export const Step = ({ data }: { data: StepType }) => {
  const { status, description, active, index } = data
  const styles = classNames(['Onboarding__steps-item', { active }])

  return (
    <li className={styles}>
      <span>{index ? index + 1 : 1}</span>
      <div className="Onboarding__steps-content">
        <p>{status}</p>
        <h4>{description}</h4>
      </div>
    </li>
  )
}
