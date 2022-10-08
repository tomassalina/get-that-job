import { Input, TextAreaInput } from "../../Inputs";
import "./CreateNewJob.styles.scss";
import moneyDolarCircle from "../../../assets/money-dollar-circle-fill.svg";
import { Button } from "../../Buttons";

export const CreateNewJob = () => {
  return (
    <div className="CreateNewJob__container">
      <h1 className="">Create new job posting</h1>
      <p className="CreateNewJob__container__main">Main information</p>
      <form>
        <Input
          type="text"
          name="JobTittle"
          placeholder="Software engineer"
          label="Job Title"
          caption=""
          value=""
          autocomplete=""
          handleChange={() => {}}
        />

        <Input
          type="text"
          name="JobCategory"
          placeholder="Select or create a category"
          label="Job Category"
          caption=""
          value=""
          autocomplete=""
          handleChange={() => {}}
        />
        <Input
          type="text"
          name="TypeInput"
          placeholder="Select a type"
          label="Type"
          caption=""
          value=""
          autocomplete="sd"
          handleChange={() => {}}
        />
        <div>Salary range</div>
        <div className="range">
          <Input
            type="text"
            name="Salary"
            placeholder="    MIN"
            label=""
            caption=""
            value=""
            autocomplete="sd"
            handleChange={() => {}}
            size="102px"
            img={moneyDolarCircle}
          />
          <div className="range__separator">-</div>
          <Input
            type="text"
            name="Salary"
            placeholder="    MAX"
            label=""
            value=""
            autocomplete="sd"
            handleChange={() => {}}
            size="102px"
            img={moneyDolarCircle}
          />
        </div>
        <p className="CreateNewJob__container__main">About the job position</p>
        <TextAreaInput
          name=""
          value=""
          placeholder="Describe the main functions and characteristics of your job position"
          label="About the job position"
          caption=""
          handleChange={() => {}}
        />
        <TextAreaInput
          name=""
          value=""
          placeholder="List each mandatory requirement in a new line"
          label="Mandatory Requirements"
          caption=""
          handleChange={() => {}}
        />
        <TextAreaInput
          name=""
          value=""
          placeholder="List each optional requirement in a new line"
          label="Optional Requirements"
          caption=""
          handleChange={() => {}}
        />
        <Button
          type="primary"
          large={false}
          text="post this job"
          handleClick={() => {}}
        />
      </form>
   
    </div>
  );
};
