import { Button } from '../../Buttons'
import { Input, TextAreaInput, RangeInput } from '../../Inputs'

import './CreateNewJob.styles.scss'

export const CreateNewJob = () => {
  return (
    <div className="CreateNewJob">
      <h1 className="CreateNewJob__title">Create new job posting</h1>
      <section className="CreateNewJob__section">
        <h2 className="CreateNewJob__subtitle">Main information</h2>
        <form>
          <Input
            type="text"
            placeholder="Software engineer"
            label="Job Title"
            name="title"
            value=""
            handleChange={() => {}}
          />
          <Input
            type="text"
            name="JobCategory"
            placeholder="Select or create a category"
            label="Job Category"
            value=""
            handleChange={() => {}}
          />
          <Input
            type="text"
            name="TypeInput"
            placeholder="Select a type"
            label="Type"
            value=""
            autocomplete="sd"
            handleChange={() => {}}
          />
          <RangeInput
            label="Salary range"
            values={{ min: '', max: '' }}
            handleChangeMin={() => {}}
            handleChangeMax={() => {}}
          />
        </form>
      </section>
      <section className="CreateNewJob__section">
        <h2 className="CreateNewJob__subtitle">Addtional information</h2>
        <form>
          <TextAreaInput
            name=""
            value=""
            placeholder="Describe the main functions and characteristics of your job position"
            label="About the job position"
            handleChange={() => {}}
          />
          <TextAreaInput
            name=""
            value=""
            placeholder="List each mandatory requirement in a new line"
            label="Mandatory Requirements"
            handleChange={() => {}}
          />
          <TextAreaInput
            name=""
            value=""
            placeholder="List each optional requirement in a new line"
            label="Optional Requirements"
            handleChange={() => {}}
          />
          <Button
            type="primary"
            large={false}
            text="post this job"
            handleClick={() => {}}
          />
        </form>
      </section>
    </div>
  )
}
