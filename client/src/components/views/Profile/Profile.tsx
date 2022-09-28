import { Navbar } from "../../Navbar";
import "./Profile.styles.scss";

export const Profile = () => {
  return (
    <>
      <div className="profile">
        <Navbar />
        <div className="profile__userInfo">
          <h1>Profile</h1>
          <h4>Personal information</h4>
          <form>
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" id="email" value="ramon.valdes@vecindad.com" />
            <br />
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" value="Ramón Valdés" />
            <br />
            <label htmlFor="phone">Phone</label>
            <br />
            <input type="text" id="phone" value="+524831212891" />
            <br />
            <label htmlFor="email">Birthdate</label>
            <br />
            <input type="date" id="email" value="07/02/1971" />
            <br />
            <br />
            <label htmlFor="linkedin">Linkedin url</label>
            <br />
            <input
              type="text"
              id="linkedin"
              value="https://www.linkedin.com/in/donramon"
            />
            <br />
          </form>

          <div className="profile__profesionalInfo">
            <h3>Professional information</h3>
            <form>
              <p>
                Changes made here will be reflected in your future applications
              </p>
              <label htmlFor="tittle">Tittle</label>
              <br />
              <input
                type="text"
                id="tittle"
                value="Professional Multiservice"
              />
              <br />3<label htmlFor="profExper">Professional Experience</label>
              <br />
              <textarea  id="profExper">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                feugiat quam ut tempor maximus. Sed neque arcu, rhoncus
                elementum sodales a, tristique sed quam. Aliquam nibh velit,
                pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus
                ligula, elementum sit amet purus ut, sagittis molestie ex. In
                hendrerit orci tellus. Integer pharetra porttitor nulla, nec
                fringilla dolor ultricies et. Integer accumsan feugiat urna, eu
                hendrerit dui varius sit amet. Mauris eget tristique turpis.
                Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere
                vehicula. Pellentesque ut mauris neque. Maecenas posuere sit
                amet erat at placerat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse potenti. Donec tempor lobortis
                nisl. Maecenas sit amet massa in tortor pulvinar sollicitudin.
                Fusce vitae feugiat felis, ut malesuada purus. Curabitur felis
                velit, interdum vitae viverra quis, sagittis ac nulla. Quisque
                tempus pharetra ornare. In sed nulla eget risus cursus facilisis
                vel quis nibh. Praesent euismod lectus a.
              </textarea>
              <br />
              <label htmlFor="education">Education</label>
              <br />
              <textarea id="education">
                Pellentesque ut mauris neque. Maecenas posuere sit amet erat at
                placerat. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse potenti. Donec tempor lobortis nisl. Maecenas
                sit amet massa in tortor pulvinar sollicitudin. Fusce vitae
                feugiat felis, ut malesuada purus. Curabitur felis velit,
                interdum vitae viverra quis, sagittis ac nulla. Quisque tempus
                pharetra ornare. In sed nulla eget risus cursus facilisis vel
                quis nibh. Praesent euismod lectus a.
              </textarea>
              <br />
              <label htmlFor="">Upload/Update your CV</label>
              <br />
              <input type="file" accept=".pdf" />
              <br />

              <button>SAVE CHANGES</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
