import { useAuth0 } from '@auth0/auth0-react'
import { Input } from '../../../Inputs'
import { Button } from '../../../Buttons'

import useSteps from '../../../../hooks/useSteps'
import { Step, professionalSteps } from '../steps'
import { ArrowRightIcon, ArrowLeftIcon } from '../../../Icons'

export const Professional = () => {
  const { user, isAuthenticated } = useAuth0()

  const { steps, handleNext, handlePrevious, handleSkip, handleFinish } =
    useSteps(professionalSteps)

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
              <Button
                text="Next"
                type={isAuthenticated ? 'primary' : 'disabled'}
                handleClick={handleNext}
              >
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
