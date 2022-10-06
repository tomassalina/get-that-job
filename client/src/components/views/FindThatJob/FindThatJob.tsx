import { Input } from "../../Inputs";
import { Navbar } from "../../Navbar";
import "./FindThatJob.styles.scss";
export const FindThatJob = () => {
  return (
    <div className="FindThatJob__container">
      <h1 className="">Find that job</h1>
      <p>search by job title or company name</p>
      <form>
        <Input
          type="text"
          name="search"
          placeholder="manufacturing, sales, swim"
          label=""
          caption=""
          value=""
          autocomplete="sd"
          handleChange={() => {}}
        />

        <Input
          type="text"
          name="category"
          placeholder="Select a category"
          label="category"
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
