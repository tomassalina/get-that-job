import { Input } from "../../Inputs";
import "./CreateNewJob.styles.scss";
export const CreateNewJob = () => {
  return (
    <div className="CreateNewJob__container">
      <h1 className="">Create new job posting</h1>
      <p>Main information</p>
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
          placeholder="Job Category"
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
        <Input
          type="text"
          name="Salary"
          placeholder="Salary Range"
          label="Salary Range"
          caption=""
          value=""
          autocomplete="sd"
          handleChange={() => {}}
        />
        <Input
          type="text"
          name="Salary"
          placeholder="Salary Range"
          label=""
          caption=""
          value=""
          autocomplete="sd"
          handleChange={() => {}}
        />
      </form>
    <div className="list__continer">
      <div className="JobCouter">12 jobs for you</div>
      <div className="JobCard">
        <div className="JobCouter__head">
          <img src="../../assets/avatar-1.png" alt="" />
          12

        </div>
sss
      </div>
    </div>

    </div>
  );
};
