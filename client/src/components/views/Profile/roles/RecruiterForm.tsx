import { Button } from '../../../Buttons'
import { Input, TextAreaInput, FileInput } from '../../../Inputs'

export const RecruiterForm = () => {
  return (
    <div className="Profile">
      <h1 className="Profile__title">Profile</h1>

      <form>
        <FileInput
          name="companyLogo"
          label="Company logo"
          caption="Only PDF. Max size 5MB"
          accept=".pdf"
          maxSize={5}
          value={{ file: {}, path: '' }}
          handleChange={() => {}}
        />
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
          name="companyWebsite"
          label="Company website"
          placeholder="https://www.mycompany.sa"
          value=""
          handleChange={() => {}}
        />
        <TextAreaInput
          name="companyAbout"
          label="About the company"
          placeholder="My Company SA has the vision to change thw way how..."
          caption="Between 100 and 2000 characters"
          value=""
          handleChange={() => {}}
        />

        <Button type="primary" text="Update profile" handleClick={() => {}} />
      </form>
    </div>
  )
}
