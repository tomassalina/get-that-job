import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import classNames from 'classnames'
import { Input } from '../../../Inputs'
import { Button } from '../../../Buttons'

import { ArrowRightIcon, ArrowLeftIcon } from '../../../Icons'

interface Step {
  status: 'in progress' | 'pending' | 'done!'
  description: string
  active: boolean
  index?: number
}

const Step = ({ data }: { data: Step }) => {
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

const stepsInitialState: Step[] = [
  {
    status: 'in progress',
    description: 'Login information',
    active: true,
  },
  {
    status: 'pending',
    description: 'Personal information',
    active: false,
  },
  {
    status: 'pending',
    description: 'Professional information',
    active: false,
  },
]

export const Professional = () => {
  const [steps, setSteps] = useState(stepsInitialState)

  const { user } = useAuth0()

  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.active)
    const nextIndex = currentIndex + 1

    const updatedSteps = steps.map((step, index) => {
      if (index === currentIndex) return { ...step, active: false }
      if (index === nextIndex) return { ...step, active: true }
      return step
    })

    setSteps(updatedSteps)
  }

  const handlePrevious = () => {
    const currentIndex = steps.findIndex(step => step.active)
    const previousIndex = currentIndex - 1

    const updatedSteps = steps.map((step, index) => {
      if (index === previousIndex) return { ...step, active: true }
      if (index === currentIndex) return { ...step, active: false }
      return step
    })

    setSteps(updatedSteps)
  }

  const handleSkip = () => {}

  const handleFinish = () => {}

  return (
    <div className="Onboarding__steps">
      <ul>
        {steps.map((step, index) => (
          <Step key={index} data={{ ...step, index }} />
        ))}
      </ul>
      <div className="Onboarding__steps-form">
        {steps[0].active && (
          <form>
            <Input
              type="text"
              name="email"
              label="Email"
              value={user?.email ? user.email : ''}
              placeholder="some.user@mail.com"
              handleChange={() => {}}
            />
            <div className="Onboarding__steps-buttons">
              <Button text="Next" type="primary" handleClick={handleNext}>
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
        )}
        {steps[1].active && (
          <form>
            <p>
              You can complete this information later but we reccomend you to do
              it now
            </p>
            <Input
              type="text"
              name="name"
              label="Name"
              placeholder="John Doe"
              value=""
              handleChange={() => {}}
            />
            <Input
              type="tel"
              name="phone"
              label="Phone"
              caption="+[country code][number]"
              placeholder="+XXXXXXXXX"
              value=""
              handleChange={() => {}}
            />
            <Input
              type="date"
              name="birthdate"
              label="Birthdate"
              placeholder="Pick a date"
              value=""
              handleChange={() => {}}
            />
            <Input
              type="url"
              name="linkedin"
              label="LinkedIn URL"
              placeholder="https://www.linkedin.com/in/username"
              value=""
              handleChange={() => {}}
            />

            <div className="Onboarding__steps-buttons">
              <Button
                text="Skip this!"
                type="secondary"
                handleClick={handleSkip}
              />
              <Button text="Next" type="primary" handleClick={handleNext}>
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
        )}

        {steps[2].active && (
          <form>
            <p>
              You can complete this information later but we reccomend you to do
              it now
            </p>
            <Input
              type="text"
              name="title"
              label="Title"
              placeholder="UX/UI designer"
              value=""
              handleChange={() => {}}
            />

            <div className="Onboarding__steps-buttons">
              <Button
                text="Previous"
                type="primary"
                handleClick={handlePrevious}
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                text="Skip this!"
                type="secondary"
                handleClick={handleSkip}
              />
              <Button text="Finish" type="primary" handleClick={handleFinish}>
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
