import { Button } from '../../../Buttons'
import { Input, TextAreaInput, FileInput } from '../../../Inputs'

export const ProfessionalForm = () => {
  return (
    <div className="Profile">
      <h1 className="Profile__title">Profile</h1>
      <div className="Profile__section">
        <h4 className="Profile__subtitle">Personal information</h4>
        <form>
          <Input
            type="text"
            name="email"
            placeholder="John Doe"
            label="email"
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
            type="date"
            name="birthdate"
            label="Birthdate"
            placeholder="Pick a date"
            value=""
            handleChange={() => {}}
          />
          <Input
            type="url"
            name="linkedinUrl"
            label="LinkedIn URL"
            placeholder="https://www.linkedin.com/in/username"
            value=""
            handleChange={() => {}}
          />
        </form>

        <div className="Profile__section">
          <h4 className="Profile__subtitle">Professional information</h4>
          <p>Changes made here will be reflected in your future applications</p>
          <form>
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
              name="resume"
              label="Upload/Update your CV"
              caption="Only PDF. Max size 5MB"
              accept=".pdf"
              maxSize={5}
              value={{ file: {}, path: '' }}
              handleChange={() => {}}
            />

            <Button
              type="primary"
              text="Update profile"
              handleClick={() => {}}
            />
          </form>
        </div>
      </div>
    </div>
  )
}
