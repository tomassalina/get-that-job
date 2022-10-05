import { useAuth0 } from '@auth0/auth0-react'
import useSteps from '../../../../hooks/useSteps'
import { Step, professionalSteps } from '../steps'
import { ArrowRightIcon, ArrowLeftIcon } from '../../../Icons'
import { Input, TextAreaInput, FileInput } from '../../../Inputs'
import { Button } from '../../../Buttons'

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
                iconRight
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
        )}
        {steps[1].active && (
          <form>
            <p className="Onboarding__steps-recommendation">
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
              <Button
                text="Next"
                type="primary"
                handleClick={handleNext}
                iconRight
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
        )}

        {steps[2].active && (
          <form>
            <p className="Onboarding__steps-recommendation">
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
            <TextAreaInput
              name="experience"
              label="Professional Experience"
              placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
              caption="Between 300 and 2000 characters"
              value=""
              handleChange={() => {}}
            />
            <TextAreaInput
              name="education"
              label="Education"
              placeholder="Major in life experiences with a PHD in procrastination..."
              caption="Between 100 and 2000 characters"
              value=""
              handleChange={() => {}}
            />
            <FileInput
              name="education"
              label="Upload/Update your CV"
              caption="Only PDF. Max size 5MB"
              accept=".pdf"
              maxSize={5}
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
              <Button
                text="Finish"
                type="primary"
                handleClick={handleFinish}
                iconRight
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
