import { useAuth0 } from '@auth0/auth0-react'
import useSteps from '../../../../hooks/useSteps'
import { Step, recruiterSteps } from '../steps'
import { Input } from '../../../Inputs'
import { Button } from '../../../Buttons'

import { ArrowRightIcon } from '../../../Icons'

export const Recruiter = () => {
  const { user, isAuthenticated } = useAuth0()

  const { steps, handleNext, handleSkip, handleFinish } =
    useSteps(recruiterSteps)

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
              name="companyName"
              label="Company name"
              placeholder="My Company S.A"
              value=""
              handleChange={() => {}}
            />
            <Input
              type="url"
              name="website"
              label="Company website"
              placeholder="https://www.mycompany.sa"
              value=""
              handleChange={() => {}}
            />

            <div className="Onboarding__steps-buttons">
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
