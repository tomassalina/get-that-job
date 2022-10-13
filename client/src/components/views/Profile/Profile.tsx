import { Button } from '../../Buttons'
import { Input } from '../../Inputs'
import { ReangeInput } from '../../Inputs/RangeInput'
import { TextArea } from '../../TextArea'
import './Profile.styles.scss'

export const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile__userInfo">
          <h1>Profile</h1>
          <h4>Personal information</h4>
          <form>
            <Input
              type="text"
              name="email"
              placeholder="Ingrese el Email"
              label="email"
              required
              value=""
              handleChange={() => {}}
            />

            <Input
              type="text"
              name="name"
              placeholder="Ingrese el nombre"
              label="name"
              required
              value=""
              handleChange={() => {}}
            />

            <Input
              type="tel"
              name="phone"
              placeholder="Ingrese el phone"
              label="Telefono"
              required
              value="+524831212891"
              handleChange={() => {}}
            />

            <Input
              type="date"
              name="birthdate"
              placeholder="Ingrese su cumpleaños"
              label="birthdate"
              value="1971/07/02"
              handleChange={() => {}}
            />

            <Input
              type={'text'}
              name={'linkedin'}
              placeholder={'Ingrese su linkedin'}
              label={'linkedin'}
              value={'https://www.linkedin.com/in/donramon'}
              handleChange={() => {}}
            />
          </form>

          <div className="profile__profesionalInfo">
            <h4>Professional information</h4>
            <form>
              <p>
                Changes made here will be reflected in your future applications
              </p>

              <Input
                handleChange={() => {}}
                type="text"
                name="tittle"
                placeholder="Ingrese su linkedin"
                label="tittle"
                value="Professional Multiservice"
              />

              <TextArea
                name="Professional Experience"
                placeholder="Professional Experience"
                label="Professional Experience"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
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
              vel quis nibh. Praesent euismod lectus a."
                handleChange={() => {}}
              />

              <TextArea
                handleChange={() => {}}
                name="education"
                placeholder="Ingrese su Educacion"
                label="education"
                value="Pellentesque ut mauris neque. Maecenas posuere sit amet erat at
              placerat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse potenti. Donec tempor lobortis nisl. Maecenas
              sit amet massa in tortor pulvinar sollicitudin. Fusce vitae
              feugiat felis, ut malesuada purus. Curabitur felis velit,
              interdum vitae viverra quis, sagittis ac nulla. Quisque tempus
              pharetra ornare. In sed nulla eget risus cursus facilisis vel
              quis nibh. Praesent euismod lectus a."
              />

              <label htmlFor="">Upload/Update your CV</label>
              <br />
              <input type="file" accept=".pdf" />
              <br />
              <br />

              <Button
                type="primary"
                text="Save changes"
                handleClick={() => {}}
              />
            </form>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
