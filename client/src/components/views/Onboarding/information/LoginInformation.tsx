import { Input } from '../../../Inputs'
import { Button } from '../../../Buttons'
import { ArrowRightIcon } from '../../../Icons'

export const LoginInformation = (props: {
  email: string
  isAuthenticated: boolean
  onNext: (email: string) => void
}) => {
  const { email, isAuthenticated, onNext } = props

  return (
    <>
      <Input
        type="text"
        name="email"
        label="Email"
        placeholder="some.user@mail.com"
        value={email}
        handleChange={() => {}}
      />
      <div className="Onboarding__steps-buttons">
        <Button
          text="Next"
          type={isAuthenticated ? 'primary' : 'disabled'}
          handleClick={() => onNext(email)}
          iconRight
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </>
  )
}
